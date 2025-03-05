import * as crypto from "crypto";
import { AccessTokenClaims } from "./api";

export class TesseralAuthenticator {
    #publishable_key: string;
    #config_api_host: string;
    #jwks?: Record<string, crypto.KeyObject>;
    #jwks_next_refresh_unix_seconds: number;
    #jwks_refresh_interval_seconds: number;

    constructor({
        publishableKey,
        configApiHost = "config.tesseral.com",
        jwksRefreshIntervalSeconds = 3600,
    }: {
        publishableKey: string;
        configApiHost?: string;
        jwksRefreshIntervalSeconds?: number;
    }) {
        this.#publishable_key = publishableKey;
        this.#config_api_host = configApiHost;
        this.#jwks_refresh_interval_seconds = jwksRefreshIntervalSeconds;
        this.#jwks_next_refresh_unix_seconds = 0;
    }

    public async authenticateAccessToken({
        accessToken,
        nowUnixSeconds,
    }: {
        accessToken: string;
        nowUnixSeconds?: number;
    }): Promise<AccessTokenClaims> {
        if (!this.#jwks || Date.now() / 1000 > this.#jwks_next_refresh_unix_seconds) {
            this.#jwks = await this.#fetchJwks();
            this.#jwks_next_refresh_unix_seconds = Date.now() / 1000 + this.#jwks_refresh_interval_seconds;
        }

        return authenticateAccessToken({
            jwks: this.#jwks,
            accessToken,
            nowUnixSeconds: nowUnixSeconds ?? Date.now() / 1000,
        });
    }

    async #fetchJwks(): Promise<Record<string, crypto.KeyObject>> {
        const response = await fetch(`https://${this.#config_api_host}/v1/config/${this.#publishable_key}`);
        if (!response.ok) {
            throw new Error("Failed to fetch JWKS");
        }
        return parseJwks(await response.json());
    }
}

/**
 * Not for public use. Instead, use a TesseralAuthenticator instance
 * directly.
 *
 * This method is exported only to enable unit testing TesseralAuthenticator's
 * internals.
 */
export function authenticateAccessToken({ jwks, accessToken, nowUnixSeconds }: { jwks: Record<string, crypto.KeyObject>, accessToken: string, nowUnixSeconds: number }): AccessTokenClaims {
    const parts = accessToken.split(".")
    if (parts.length !== 3) {
        throw new InvalidAccessTokenError();
    }

    const [rawHeader, rawClaims, rawSignature] = parts;

    const parsedHeader = JSON.parse(base64URLDecode(parts[0]))
    if (!(parsedHeader.kid in jwks)) {
        throw new InvalidAccessTokenError();
    }

    const publicKey = jwks[parsedHeader.kid];

    const signature = Buffer.from(rawSignature.replace(/-/g, "+").replace(/_/g, "/"), 'base64')
    const valid = crypto.verify(
        'sha256',
        Buffer.from(rawHeader + '.' + rawClaims),
        {
            key: publicKey,
            dsaEncoding: 'ieee-p1363',
        },
        signature
    )
    if (!valid) {
        throw new InvalidAccessTokenError();
    }

    const claims = JSON.parse(base64URLDecode(rawClaims)) as AccessTokenClaims;
    if (nowUnixSeconds < claims.nbf! || claims.exp! < nowUnixSeconds) {
        throw new InvalidAccessTokenError();
    }

    return claims;
}

function base64URLDecode(s: string): string {
    return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), 'base64').toString();
}

/**
 * Not for public use. Instead, use a TesseralAuthenticator instance
 * directly.
 *
 * This method is exported only to enable unit testing TesseralAuthenticator's
 * internals.
 */
export function parseJwks(jwksData: any): Record<string, crypto.KeyObject> {
    const jwks: Record<string, crypto.KeyObject> = {}
    for (const key of jwksData.keys) {
        if (key.kty !== 'EC' || key.crv !== 'P-256') {
            throw new Error("internal error: jwks must contain P-256 elliptic public keys")
        }

        jwks[key.kid] = crypto.createPublicKey({
            format: 'jwk',
            key,
        })
    }

    return jwks;
}

export class InvalidAccessTokenError extends Error {
    constructor() {
        super("Invalid access token");
        Object.setPrototypeOf(this, InvalidAccessTokenError.prototype);
    }
}

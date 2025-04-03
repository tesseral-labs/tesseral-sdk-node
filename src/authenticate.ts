import * as crypto from "crypto";
import { AccessTokenClaims } from "./api";

export class AccessTokenAuthenticator {
    private publishableKey: string;
    private configApiHostname: string;
    private projectId?: string;
    private jwks?: Record<string, crypto.KeyObject>;
    private jwksNextRefreshUnixSeconds: number;
    private jwksRefreshIntervalSeconds: number;

    constructor({
        publishableKey,
        configApiHostname = "config.tesseral.com",
        jwksRefreshIntervalSeconds = 3600,
    }: {
        publishableKey: string;
        configApiHostname?: string;
        jwksRefreshIntervalSeconds?: number;
    }) {
        this.publishableKey = publishableKey;
        this.configApiHostname = configApiHostname;
        this.jwksRefreshIntervalSeconds = jwksRefreshIntervalSeconds;
        this.jwksNextRefreshUnixSeconds = 0;
    }

    public async authenticateAccessToken({
        accessToken,
        nowUnixSeconds,
    }: {
        accessToken: string;
        nowUnixSeconds?: number;
    }): Promise<AccessTokenClaims> {
        await this.updateConfigData();
        return authenticateAccessToken({
            jwks: this.jwks!,
            accessToken,
            nowUnixSeconds: nowUnixSeconds ?? Date.now() / 1000,
        });
    }

    public async getProjectId(): Promise<string> {
        await this.updateConfigData();
        return this.projectId!;
    }

    private async updateConfigData(): Promise<void> {
        if (Date.now() / 1000 < this.jwksNextRefreshUnixSeconds) {
            return;
        }

        const response = await fetch(`https://${this.configApiHostname}/v1/config/${this.publishableKey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch JWKS");
        }
        const { projectId, jwks } = parseConfig(await response.json());
        this.projectId = projectId;
        this.jwks = jwks;
        this.jwksNextRefreshUnixSeconds = Date.now() / 1000 + this.jwksRefreshIntervalSeconds;
    }
}

function authenticateAccessToken({
    jwks,
    accessToken,
    nowUnixSeconds,
}: {
    jwks: Record<string, crypto.KeyObject>;
    accessToken: string;
    nowUnixSeconds: number;
}): AccessTokenClaims {
    const parts = accessToken.split(".");
    if (parts.length !== 3) {
        throw new InvalidAccessTokenError();
    }

    const [rawHeader, rawClaims, rawSignature] = parts;

    const parsedHeader = JSON.parse(base64URLDecode(parts[0]));
    if (!(parsedHeader.kid in jwks)) {
        throw new InvalidAccessTokenError();
    }

    const publicKey = jwks[parsedHeader.kid];

    const signature = Buffer.from(rawSignature.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    const valid = crypto.verify(
        "sha256",
        Buffer.from(rawHeader + "." + rawClaims),
        {
            key: publicKey,
            dsaEncoding: "ieee-p1363",
        },
        signature
    );
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
    return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString();
}

interface Config {
    projectId: string;
    jwks: Record<string, crypto.KeyObject>;
}

function parseConfig(configData: any): Config {
    const jwks: Record<string, crypto.KeyObject> = {};
    for (const key of configData.keys) {
        if (key.kty !== "EC" || key.crv !== "P-256") {
            throw new Error("internal error: jwks must contain P-256 elliptic public keys");
        }

        jwks[key.kid] = crypto.createPublicKey({
            format: "jwk",
            key,
        });
    }

    return { projectId: configData.projectId, jwks };
}

class InvalidAccessTokenError extends Error {
    constructor() {
        super("Invalid access token");
        Object.setPrototypeOf(this, InvalidAccessTokenError.prototype);
    }
}

export const __exportedForTests = {
    parseConfig,
    authenticateAccessToken,
};

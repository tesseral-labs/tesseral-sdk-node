import { AccessTokenClaims } from "./api";

export class AccessTokenAuthenticator {
    private publishableKey: string;
    private configApiHostname: string;
    private projectId?: string;
    private jwks?: Record<string, CryptoKey>;
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
        return await authenticateAccessToken({
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
        const { projectId, jwks } = await parseConfig(await response.json());
        this.projectId = projectId;
        this.jwks = jwks;
        this.jwksNextRefreshUnixSeconds = Date.now() / 1000 + this.jwksRefreshIntervalSeconds;
    }
}

async function authenticateAccessToken({
    jwks,
    accessToken,
    nowUnixSeconds,
}: {
    jwks: Record<string, CryptoKey>;
    accessToken: string;
    nowUnixSeconds: number;
}): Promise<AccessTokenClaims> {
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
    const valid = await globalThis.crypto.subtle.verify(
        {
            name: "ECDSA",
            hash: "SHA-256",
        },
        publicKey,
        signature,
        new TextEncoder().encode(rawHeader + "." + rawClaims),
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

export function base64URLDecode(s: string): string {
    return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString();
}

interface Config {
    projectId: string;
    jwks: Record<string, CryptoKey>;
}

async function parseConfig(configData: any): Promise<Config> {
    const jwks: Record<string, CryptoKey> = {};
    for (const key of configData.keys) {
        if (key.kty !== "EC" || key.crv !== "P-256") {
            throw new Error("internal error: jwks must contain P-256 elliptic public keys");
        }

        jwks[key.kid] = await globalThis.crypto.subtle.importKey(
            "jwk",
            key,
            {
                name: "ECDSA",
                namedCurve: "P-256",
            },
            false,
            ["verify"],
        );
    }

    return { projectId: configData.projectId, jwks };
}

export class InvalidAccessTokenError extends Error {
    constructor() {
        super("Invalid access token");
        Object.setPrototypeOf(this, InvalidAccessTokenError.prototype);
    }
}

export const __exportedForTests = {
    parseConfig,
    authenticateAccessToken,
};

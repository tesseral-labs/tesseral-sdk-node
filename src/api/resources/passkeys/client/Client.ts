/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Tesseral from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Passkeys {
    interface Options {
        environment?: core.Supplier<environments.TesseralEnvironment | string>;
        backendApiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Passkeys {
    constructor(protected readonly _options: Passkeys.Options = {}) {}

    /**
     * List Passkeys.
     *
     * @param {Tesseral.PasskeysListPasskeysRequest} request
     * @param {Passkeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.passkeys.listPasskeys()
     */
    public async listPasskeys(
        request: Tesseral.PasskeysListPasskeysRequest = {},
        requestOptions?: Passkeys.RequestOptions
    ): Promise<Tesseral.ListPasskeysResponse> {
        const { userId, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        if (pageToken != null) {
            _queryParams["pageToken"] = pageToken;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.TesseralEnvironment.Default,
                "v1/passkeys"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.8",
                "User-Agent": "@tesseral/tesseral-node/0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ListPasskeysResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Tesseral.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.TesseralError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TesseralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TesseralTimeoutError();
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a Passkey.
     *
     * @param {string} id - The Passkey ID.
     * @param {Passkeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.passkeys.getPasskey("id")
     */
    public async getPasskey(
        id: string,
        requestOptions?: Passkeys.RequestOptions
    ): Promise<Tesseral.GetPasskeyResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.TesseralEnvironment.Default,
                `v1/passkeys/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.8",
                "User-Agent": "@tesseral/tesseral-node/0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetPasskeyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Tesseral.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.TesseralError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TesseralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TesseralTimeoutError();
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a Passkey.
     *
     * @param {string} id - The Passkey ID.
     * @param {Passkeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.passkeys.deletePasskey("id")
     */
    public async deletePasskey(
        id: string,
        requestOptions?: Passkeys.RequestOptions
    ): Promise<Tesseral.DeletePasskeyResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.TesseralEnvironment.Default,
                `v1/passkeys/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.8",
                "User-Agent": "@tesseral/tesseral-node/0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeletePasskeyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Tesseral.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.TesseralError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TesseralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TesseralTimeoutError();
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a Passkey.
     *
     * @param {string} id - The Passkey ID.
     * @param {Tesseral.Passkey} request
     * @param {Passkeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.passkeys.updatePasskey("id", {})
     */
    public async updatePasskey(
        id: string,
        request: Tesseral.Passkey,
        requestOptions?: Passkeys.RequestOptions
    ): Promise<Tesseral.UpdatePasskeyResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.TesseralEnvironment.Default,
                `v1/passkeys/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.8",
                "User-Agent": "@tesseral/tesseral-node/0.0.8",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.Passkey.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdatePasskeyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Tesseral.BadRequestError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.TesseralError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TesseralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TesseralTimeoutError();
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer =
            (await core.Supplier.get(this._options.backendApiKey)) ?? process?.env["TESSERAL_BACKEND_API_KEY"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Tesseral from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace UserRoleAssignments {
    export interface Options {
        environment?: core.Supplier<environments.TesseralEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        backendApiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class UserRoleAssignments {
    constructor(protected readonly _options: UserRoleAssignments.Options = {}) {}

    /**
     * List User Role Assignments.
     *
     * @param {Tesseral.UserRoleAssignmentsListUserRoleAssignmentsRequest} request
     * @param {UserRoleAssignments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.userRoleAssignments.listUserRoleAssignments()
     */
    public async listUserRoleAssignments(
        request: Tesseral.UserRoleAssignmentsListUserRoleAssignmentsRequest = {},
        requestOptions?: UserRoleAssignments.RequestOptions,
    ): Promise<Tesseral.ListUserRoleAssignmentsResponse> {
        const { userId, roleId, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        if (roleId != null) {
            _queryParams["roleId"] = roleId;
        }

        if (pageToken != null) {
            _queryParams["pageToken"] = pageToken;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TesseralEnvironment.Default,
                "v1/user-role-assignments",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.19",
                "User-Agent": "@tesseral/tesseral-node/0.0.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ListUserRoleAssignmentsResponse.parseOrThrow(_response.body, {
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
                        }),
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
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
                throw new errors.TesseralTimeoutError("Timeout exceeded when calling GET /v1/user-role-assignments.");
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a User Role Assignment.
     *
     * @param {Tesseral.UserRoleAssignment} request
     * @param {UserRoleAssignments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.userRoleAssignments.createUserRoleAssignment({})
     */
    public async createUserRoleAssignment(
        request: Tesseral.UserRoleAssignment,
        requestOptions?: UserRoleAssignments.RequestOptions,
    ): Promise<Tesseral.CreateUserRoleAssignmentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TesseralEnvironment.Default,
                "v1/user-role-assignments",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.19",
                "User-Agent": "@tesseral/tesseral-node/0.0.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UserRoleAssignment.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateUserRoleAssignmentResponse.parseOrThrow(_response.body, {
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
                        }),
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
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
                throw new errors.TesseralTimeoutError("Timeout exceeded when calling POST /v1/user-role-assignments.");
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a User Role Assignment.
     *
     * @param {string} id
     * @param {UserRoleAssignments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.userRoleAssignments.getUserRoleAssignment("id")
     */
    public async getUserRoleAssignment(
        id: string,
        requestOptions?: UserRoleAssignments.RequestOptions,
    ): Promise<Tesseral.GetUserRoleAssignmentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TesseralEnvironment.Default,
                `v1/user-role-assignments/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.19",
                "User-Agent": "@tesseral/tesseral-node/0.0.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetUserRoleAssignmentResponse.parseOrThrow(_response.body, {
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
                        }),
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
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
                throw new errors.TesseralTimeoutError(
                    "Timeout exceeded when calling GET /v1/user-role-assignments/{id}.",
                );
            case "unknown":
                throw new errors.TesseralError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a User Role Assignment.
     *
     * @param {string} id
     * @param {UserRoleAssignments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Tesseral.BadRequestError}
     * @throws {@link Tesseral.UnauthorizedError}
     * @throws {@link Tesseral.ForbiddenError}
     * @throws {@link Tesseral.NotFoundError}
     *
     * @example
     *     await client.userRoleAssignments.deleteUserRoleAssignment("id")
     */
    public async deleteUserRoleAssignment(
        id: string,
        requestOptions?: UserRoleAssignments.RequestOptions,
    ): Promise<Tesseral.DeleteUserRoleAssignmentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TesseralEnvironment.Default,
                `v1/user-role-assignments/${encodeURIComponent(id)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tesseral/tesseral-node",
                "X-Fern-SDK-Version": "0.0.19",
                "User-Agent": "@tesseral/tesseral-node/0.0.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeleteUserRoleAssignmentResponse.parseOrThrow(_response.body, {
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
                        }),
                    );
                case 401:
                    throw new Tesseral.UnauthorizedError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 403:
                    throw new Tesseral.ForbiddenError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 404:
                    throw new Tesseral.NotFoundError(
                        serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
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
                throw new errors.TesseralTimeoutError(
                    "Timeout exceeded when calling DELETE /v1/user-role-assignments/{id}.",
                );
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

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { ApiKey } from "./ApiKey";

export const UpdateApiKeyResponse: core.serialization.ObjectSchema<
    serializers.UpdateApiKeyResponse.Raw,
    Tesseral.UpdateApiKeyResponse
> = core.serialization.object({
    apiKey: ApiKey.optional(),
});

export declare namespace UpdateApiKeyResponse {
    export interface Raw {
        apiKey?: ApiKey.Raw | null;
    }
}

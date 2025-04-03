/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { ScimapiKey } from "./ScimapiKey";

export const CreateScimapiKeyResponse: core.serialization.ObjectSchema<
    serializers.CreateScimapiKeyResponse.Raw,
    Tesseral.CreateScimapiKeyResponse
> = core.serialization.object({
    scimApiKey: ScimapiKey.optional(),
});

export declare namespace CreateScimapiKeyResponse {
    export interface Raw {
        scimApiKey?: ScimapiKey.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { ScimapiKey } from "./ScimapiKey";

export const RevokeScimapiKeyResponse: core.serialization.ObjectSchema<
    serializers.RevokeScimapiKeyResponse.Raw,
    Tesseral.RevokeScimapiKeyResponse
> = core.serialization.object({
    scimApiKey: ScimapiKey.optional(),
});

export declare namespace RevokeScimapiKeyResponse {
    export interface Raw {
        scimApiKey?: ScimapiKey.Raw | null;
    }
}

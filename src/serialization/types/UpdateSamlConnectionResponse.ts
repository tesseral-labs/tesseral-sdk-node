/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { SamlConnection } from "./SamlConnection";

export const UpdateSamlConnectionResponse: core.serialization.ObjectSchema<
    serializers.UpdateSamlConnectionResponse.Raw,
    Tesseral.UpdateSamlConnectionResponse
> = core.serialization.object({
    samlConnection: SamlConnection.optional(),
});

export declare namespace UpdateSamlConnectionResponse {
    interface Raw {
        samlConnection?: SamlConnection.Raw | null;
    }
}

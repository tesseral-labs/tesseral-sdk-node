/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { SamlConnection } from "./SamlConnection";

export const CreateSamlConnectionResponse: core.serialization.ObjectSchema<
    serializers.CreateSamlConnectionResponse.Raw,
    Tesseral.CreateSamlConnectionResponse
> = core.serialization.object({
    samlConnection: SamlConnection.optional(),
});

export declare namespace CreateSamlConnectionResponse {
    interface Raw {
        samlConnection?: SamlConnection.Raw | null;
    }
}

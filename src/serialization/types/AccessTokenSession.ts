/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const AccessTokenSession: core.serialization.ObjectSchema<
    serializers.AccessTokenSession.Raw,
    Tesseral.AccessTokenSession
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace AccessTokenSession {
    export interface Raw {
        id: string;
    }
}

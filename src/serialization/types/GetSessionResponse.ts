/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Session } from "./Session";

export const GetSessionResponse: core.serialization.ObjectSchema<
    serializers.GetSessionResponse.Raw,
    Tesseral.GetSessionResponse
> = core.serialization.object({
    session: Session.optional(),
});

export declare namespace GetSessionResponse {
    export interface Raw {
        session?: Session.Raw | null;
    }
}

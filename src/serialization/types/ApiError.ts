/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const ApiError: core.serialization.ObjectSchema<serializers.ApiError.Raw, Tesseral.ApiError> =
    core.serialization.object({
        message: core.serialization.string().optional(),
        details: core.serialization.list(core.serialization.unknown()).optional(),
    });

export declare namespace ApiError {
    export interface Raw {
        message?: string | null;
        details?: unknown[] | null;
    }
}

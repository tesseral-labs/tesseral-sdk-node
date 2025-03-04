/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { ApiErrorDetail } from "./ApiErrorDetail";

export const ApiError: core.serialization.ObjectSchema<serializers.ApiError.Raw, Tesseral.ApiError> =
    core.serialization.object({
        message: core.serialization.string().optional(),
        details: core.serialization.list(ApiErrorDetail).optional(),
    });

export declare namespace ApiError {
    interface Raw {
        message?: string | null;
        details?: ApiErrorDetail.Raw[] | null;
    }
}

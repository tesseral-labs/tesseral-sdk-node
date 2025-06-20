/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { User } from "./User";

export const CreateUserResponse: core.serialization.ObjectSchema<
    serializers.CreateUserResponse.Raw,
    Tesseral.CreateUserResponse
> = core.serialization.object({
    user: User.optional(),
});

export declare namespace CreateUserResponse {
    export interface Raw {
        user?: User.Raw | null;
    }
}

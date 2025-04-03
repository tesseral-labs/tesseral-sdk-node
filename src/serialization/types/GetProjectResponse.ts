/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Project } from "./Project";

export const GetProjectResponse: core.serialization.ObjectSchema<
    serializers.GetProjectResponse.Raw,
    Tesseral.GetProjectResponse
> = core.serialization.object({
    project: Project.optional(),
});

export declare namespace GetProjectResponse {
    export interface Raw {
        project?: Project.Raw | null;
    }
}

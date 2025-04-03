/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Organization } from "./Organization";

export const ListOrganizationsResponse: core.serialization.ObjectSchema<
    serializers.ListOrganizationsResponse.Raw,
    Tesseral.ListOrganizationsResponse
> = core.serialization.object({
    organizations: core.serialization.list(Organization).optional(),
    nextPageToken: core.serialization.string().optional(),
});

export declare namespace ListOrganizationsResponse {
    export interface Raw {
        organizations?: Organization.Raw[] | null;
        nextPageToken?: string | null;
    }
}

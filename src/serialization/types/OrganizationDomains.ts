/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const OrganizationDomains: core.serialization.ObjectSchema<
    serializers.OrganizationDomains.Raw,
    Tesseral.OrganizationDomains
> = core.serialization.object({
    organizationId: core.serialization.string().optional(),
    domains: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace OrganizationDomains {
    export interface Raw {
        organizationId?: string | null;
        domains?: string[] | null;
    }
}

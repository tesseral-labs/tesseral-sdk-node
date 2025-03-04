/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { OrganizationGoogleHostedDomains } from "./OrganizationGoogleHostedDomains";

export const UpdateOrganizationGoogleHostedDomainsResponse: core.serialization.ObjectSchema<
    serializers.UpdateOrganizationGoogleHostedDomainsResponse.Raw,
    Tesseral.UpdateOrganizationGoogleHostedDomainsResponse
> = core.serialization.object({
    organizationGoogleHostedDomains: OrganizationGoogleHostedDomains.optional(),
});

export declare namespace UpdateOrganizationGoogleHostedDomainsResponse {
    interface Raw {
        organizationGoogleHostedDomains?: OrganizationGoogleHostedDomains.Raw | null;
    }
}

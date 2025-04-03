/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { OrganizationGoogleHostedDomains } from "./OrganizationGoogleHostedDomains";

export const GetOrganizationGoogleHostedDomainsResponse: core.serialization.ObjectSchema<
    serializers.GetOrganizationGoogleHostedDomainsResponse.Raw,
    Tesseral.GetOrganizationGoogleHostedDomainsResponse
> = core.serialization.object({
    organizationGoogleHostedDomains: OrganizationGoogleHostedDomains.optional(),
});

export declare namespace GetOrganizationGoogleHostedDomainsResponse {
    export interface Raw {
        organizationGoogleHostedDomains?: OrganizationGoogleHostedDomains.Raw | null;
    }
}

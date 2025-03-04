/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const UserInvite: core.serialization.ObjectSchema<serializers.UserInvite.Raw, Tesseral.UserInvite> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        organizationId: core.serialization.string().optional(),
        createTime: core.serialization.date().optional(),
        updateTime: core.serialization.date().optional(),
        email: core.serialization.string().optional(),
        owner: core.serialization.boolean().optional(),
    });

export declare namespace UserInvite {
    interface Raw {
        id?: string | null;
        organizationId?: string | null;
        createTime?: string | null;
        updateTime?: string | null;
        email?: string | null;
        owner?: boolean | null;
    }
}

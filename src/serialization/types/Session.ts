/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const Session: core.serialization.ObjectSchema<serializers.Session.Raw, Tesseral.Session> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        userId: core.serialization.string().optional(),
        revoked: core.serialization.boolean().optional(),
        createTime: core.serialization.date().optional(),
        lastActiveTime: core.serialization.date().optional(),
        expireTime: core.serialization.date().optional(),
    });

export declare namespace Session {
    interface Raw {
        id?: string | null;
        userId?: string | null;
        revoked?: boolean | null;
        createTime?: string | null;
        lastActiveTime?: string | null;
        expireTime?: string | null;
    }
}

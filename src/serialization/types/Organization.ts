/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const Organization: core.serialization.ObjectSchema<serializers.Organization.Raw, Tesseral.Organization> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        displayName: core.serialization.string().optional(),
        createTime: core.serialization.date().optional(),
        updateTime: core.serialization.date().optional(),
        logInWithGoogle: core.serialization.boolean().optional(),
        logInWithMicrosoft: core.serialization.boolean().optional(),
        logInWithEmail: core.serialization.boolean().optional(),
        logInWithPassword: core.serialization.boolean().optional(),
        logInWithSaml: core.serialization.boolean().optional(),
        logInWithAuthenticatorApp: core.serialization.boolean().optional(),
        logInWithPasskey: core.serialization.boolean().optional(),
        requireMfa: core.serialization.boolean().optional(),
        scimEnabled: core.serialization.boolean().optional(),
    });

export declare namespace Organization {
    export interface Raw {
        id?: string | null;
        displayName?: string | null;
        createTime?: string | null;
        updateTime?: string | null;
        logInWithGoogle?: boolean | null;
        logInWithMicrosoft?: boolean | null;
        logInWithEmail?: boolean | null;
        logInWithPassword?: boolean | null;
        logInWithSaml?: boolean | null;
        logInWithAuthenticatorApp?: boolean | null;
        logInWithPasskey?: boolean | null;
        requireMfa?: boolean | null;
        scimEnabled?: boolean | null;
    }
}

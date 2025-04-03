/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A User represents an individual working for one of your corporate customers.
 */
export interface User {
    /** The User ID. Starts with `user_...`. */
    id?: string;
    /** The Organization this User belongs to. */
    organizationId?: string;
    /**
     * The User's email address.
     *
     *  This email is verified and unique within the Organization. Two Users in
     *  different Organizations may have the same email.
     */
    email?: string;
    /** When the User was created. */
    createTime?: Date;
    /** When the User was last updated. */
    updateTime?: Date;
    /** Whether the User is an owner of their Organization. */
    owner?: boolean;
    /** The Google User ID, if the User has ever logged in with Google. */
    googleUserId?: string;
    /** The Microsoft User ID, if the User has ever logged in with Microsoft. */
    microsoftUserId?: string;
    /** Whether the User has an authenticator app set up. */
    hasAuthenticatorApp?: boolean;
}

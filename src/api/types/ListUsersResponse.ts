/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Tesseral from "../index";

export interface ListUsersResponse {
    /** A list of Users. */
    users?: Tesseral.User[];
    /** The pagination token for the next page of results. Empty if there is no next page. */
    nextPageToken?: string;
}

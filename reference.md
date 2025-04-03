# Reference

## Organizations

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">listOrganizations</a>({ ...params }) -> Tesseral.ListOrganizationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Organizations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.listOrganizations();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.OrganizationsListOrganizationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">createOrganization</a>({ ...params }) -> Tesseral.CreateOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.createOrganization({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.Organization`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganization</a>(id) -> Tesseral.GetOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganization("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Organization ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">deleteOrganization</a>(id) -> Tesseral.DeleteOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.deleteOrganization("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Organization ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganization</a>(id, { ...params }) -> Tesseral.UpdateOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganization("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Organization ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.Organization`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganizationDomains</a>(organizationId) -> Tesseral.GetOrganizationDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Organization Domains.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganizationDomains("organizationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The Organization ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganizationDomains</a>(organizationId, { ...params }) -> Tesseral.UpdateOrganizationDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Organization Domains.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganizationDomains("organizationId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The Organization ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.OrganizationDomains`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganizationGoogleHostedDomains</a>(organizationId) -> Tesseral.GetOrganizationGoogleHostedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Organization Google Hosted Domains.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganizationGoogleHostedDomains("organizationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The ID of the Organization.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganizationGoogleHostedDomains</a>(organizationId, { ...params }) -> Tesseral.UpdateOrganizationGoogleHostedDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Organization Google Hosted Domains.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganizationGoogleHostedDomains("organizationId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The ID of the Organization.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.OrganizationGoogleHostedDomains`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganizationMicrosoftTenantIDs</a>(organizationId) -> Tesseral.GetOrganizationMicrosoftTenantIDsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Organization Microsoft Tenant IDs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganizationMicrosoftTenantIDs("organizationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The ID of the Organization.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganizationMicrosoftTenantIDs</a>(organizationId, { ...params }) -> Tesseral.UpdateOrganizationMicrosoftTenantIDsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Organization Microsoft Tenant IDs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganizationMicrosoftTenantIDs("organizationId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationId:** `string` — The ID of the Organization.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.OrganizationMicrosoftTenantIDs`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Passkeys

<details><summary><code>client.passkeys.<a href="/src/api/resources/passkeys/client/Client.ts">listPasskeys</a>({ ...params }) -> Tesseral.ListPasskeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Passkeys.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.passkeys.listPasskeys();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.PasskeysListPasskeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passkeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.passkeys.<a href="/src/api/resources/passkeys/client/Client.ts">getPasskey</a>(id) -> Tesseral.GetPasskeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a Passkey.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.passkeys.getPasskey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Passkey ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passkeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.passkeys.<a href="/src/api/resources/passkeys/client/Client.ts">deletePasskey</a>(id) -> Tesseral.DeletePasskeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Passkey.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.passkeys.deletePasskey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Passkey ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passkeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.passkeys.<a href="/src/api/resources/passkeys/client/Client.ts">updatePasskey</a>(id, { ...params }) -> Tesseral.UpdatePasskeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Passkey.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.passkeys.updatePasskey("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Passkey ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.Passkey`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passkeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Projects

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">getProject</a>() -> Tesseral.GetProjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the current project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.getProject();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SamlConnections

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">listSamlConnections</a>({ ...params }) -> Tesseral.ListSamlConnectionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List SAML Connections.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.listSamlConnections();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SamlConnectionsListSamlConnectionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">createSamlConnection</a>({ ...params }) -> Tesseral.CreateSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a SAML Connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.createSamlConnection({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SamlConnection`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">getSamlConnection</a>(id) -> Tesseral.GetSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a SAML Connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.getSamlConnection("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SAML Connection ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">deleteSamlConnection</a>(id) -> Tesseral.DeleteSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a SAML Connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.deleteSamlConnection("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SAML Connection ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">updateSamlConnection</a>(id, { ...params }) -> Tesseral.UpdateSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a SAML Connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.updateSamlConnection("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SAML Connection ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.SamlConnection`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ScimApiKeys

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">listScimapiKeys</a>({ ...params }) -> Tesseral.ListScimapiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List SCIM API Keys.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.listScimapiKeys();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ScimApiKeysListScimapiKeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">createScimapiKey</a>({ ...params }) -> Tesseral.CreateScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a SCIM API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.createScimapiKey({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ScimapiKey`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">getScimapiKey</a>(id) -> Tesseral.GetScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a SCIM API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.getScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SCIM API Key ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">deleteScimapiKey</a>(id) -> Tesseral.DeleteScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a SCIM API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.deleteScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SCIM API Key ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">updateScimapiKey</a>(id, { ...params }) -> Tesseral.UpdateScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a SCIM API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.updateScimapiKey("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SCIM API Key ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.ScimapiKey`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">revokeScimapiKey</a>(id) -> Tesseral.RevokeScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke a SCIM API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.revokeScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The SCIM API Key ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sessions

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">listSessions</a>({ ...params }) -> Tesseral.ListSessionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Sessions.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.listSessions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SessionsListSessionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">getSession</a>(id) -> Tesseral.GetSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a Session.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.getSession("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The Session ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UserInvites

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">listUserInvites</a>({ ...params }) -> Tesseral.ListUserInvitesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List User Invites.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.listUserInvites();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserInvitesListUserInvitesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">createUserInvite</a>({ ...params }) -> Tesseral.CreateUserInviteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a User Invite.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.createUserInvite({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserInvite`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">getUserInvite</a>(id) -> Tesseral.GetUserInviteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a User Invite.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.getUserInvite("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The User Invite ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">deleteUserInvite</a>(id) -> Tesseral.DeleteUserInviteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a User Invite.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.deleteUserInvite("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The User Invite ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUsers</a>({ ...params }) -> Tesseral.ListUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Users.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUsers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UsersListUsersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createUser</a>({ ...params }) -> Tesseral.CreateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a User.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.createUser({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.User`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUser</a>(id) -> Tesseral.GetUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a User.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getUser("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The User ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteUser</a>(id) -> Tesseral.DeleteUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a User.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteUser("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The User ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateUser</a>(id, { ...params }) -> Tesseral.UpdateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a User.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateUser("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The User ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.User`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

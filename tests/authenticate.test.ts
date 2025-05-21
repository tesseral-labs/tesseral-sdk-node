import { __exportedForTests } from "../src/authenticate";

const ACCESS_TOKEN_TEST_CASES = [
    {
        name: "happy path",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEEA",
        nowUnixSeconds: 1741195318,
        claims: {
            iss: "https://project-54vwf0clhh0caqe20eujxgpeq.tesseral.app",
            sub: "user_97urqoip5q7kef87wpotvzzxz",
            aud: "https://project-54vwf0clhh0caqe20eujxgpeq.tesseral.app",
            exp: 1741195468,
            nbf: 1741195168,
            iat: 1741195168,
            organization: {
                id: "org_7908mz2ul9usdhy0gdd3tiean",
                displayName: "project_54vwf0clhh0caqe20eujxgpeq Backing Organization",
            },
            user: {
                id: "user_97urqoip5q7kef87wpotvzzxz",
                email: "root@app.tesseral.example.com",
            },
            session: {
                id: "session_03di0nkjlmr6hwqd4z0899o2r",
            },
        },
    },
    {
        name: "before nbf",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEEA",
        nowUnixSeconds: 1741195167,
        claims: null,
    },
    {
        name: "after exp",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEEA",
        nowUnixSeconds: 1741195469,
        claims: null,
    },
    {
        name: "unknown kid",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"XXX","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEEA",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "empty access token",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken: "",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "invalid base64 in header",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken: "e30.e30K.e30K",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "invalid base64 in claims",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken: "e30K.e30.e30K",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "invalid base64 in access signature",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken: "e30K.e30K.e30",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "no signature",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "bad signature correct length",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvAAA",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "bad signature too short",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgv",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "bad signature too long",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEEAXXX",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
    {
        name: "bad signature invalid base64",
        jwks: '{"projectId":"project_54vwf0clhh0caqe20eujxgpeq","vaultDomain":"auth.console.tesseral.example.com","keys":[{"crv":"P-256","kid":"session_signing_key_c384uca1sbus4xpki7j2kgaqt","kty":"EC","x":"qCByog0iFwVfDF-fkoPhKNW8JjNLGQJMk_atUGGbvoM","y":"vFZaL73AXgLcPxRS_yc9fsJTTiy-f-OVRD2IexKN17g"}]}',
        accessToken:
            "eyJraWQiOiJzZXNzaW9uX3NpZ25pbmdfa2V5X2MzODR1Y2Exc2J1czR4cGtpN2oya2dhcXQiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJzdWIiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJhdWQiOiJodHRwczovL3Byb2plY3QtNTR2d2YwY2xoaDBjYXFlMjBldWp4Z3BlcS50ZXNzZXJhbC5hcHAiLCJleHAiOjE3NDExOTU0NjgsIm5iZiI6MTc0MTE5NTE2OCwiaWF0IjoxNzQxMTk1MTY4LCJvcmdhbml6YXRpb24iOnsiaWQiOiJvcmdfNzkwOG16MnVsOXVzZGh5MGdkZDN0aWVhbiIsImRpc3BsYXlOYW1lIjoicHJvamVjdF81NHZ3ZjBjbGhoMGNhcWUyMGV1anhncGVxIEJhY2tpbmcgT3JnYW5pemF0aW9uIn0sInVzZXIiOnsiaWQiOiJ1c2VyXzk3dXJxb2lwNXE3a2VmODd3cG90dnp6eHoiLCJlbWFpbCI6InJvb3RAYXBwLnRlc3NlcmFsLmV4YW1wbGUuY29tIn0sInNlc3Npb24iOnsiaWQiOiJzZXNzaW9uXzAzZGkwbmtqbG1yNmh3cWQ0ejA4OTlvMnIifX0.utyHAIubtDLJAY9b3Ec_rMBOX9ejOA21sh2fpVHm34S3ywBpiM7Pe0SvsDWhZQh_GG7Il1-H3Eju7dBIDgvEE=",
        nowUnixSeconds: 1741195318,
        claims: null,
    },
];

describe("authenticate", () => {
    for (const testCase of ACCESS_TOKEN_TEST_CASES) {
        it(testCase.name, async () => {
            const { jwks } = await __exportedForTests.parseConfig(JSON.parse(testCase.jwks));

            if (testCase.claims) {
                expect(
                    await __exportedForTests.authenticateAccessToken({
                        jwks,
                        accessToken: testCase.accessToken,
                        nowUnixSeconds: testCase.nowUnixSeconds,
                    }),
                ).toEqual(testCase.claims);
            } else {
                await expect(async () =>
                    await __exportedForTests.authenticateAccessToken({
                        jwks,
                        accessToken: testCase.accessToken,
                        nowUnixSeconds: testCase.nowUnixSeconds,
                    }),
                ).rejects.toThrow();
            }
        });
    }
});

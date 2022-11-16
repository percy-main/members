import React from "react";
import { GatsbyBrowser } from "gatsby";
import { Auth0Provider } from "@auth0/auth0-react";
import * as config from "./src/config";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <Auth0Provider
    domain={config.GATSBY_AUTH_DOMAIN}
    clientId={config.GATSBY_AUTH_CLIENT_ID}
    audience={config.GATSBY_API_AUDIENCE}
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    {element}
  </Auth0Provider>
);

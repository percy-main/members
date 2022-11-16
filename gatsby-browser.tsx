import React from "react";
import { GatsbyBrowser } from "gatsby";
import { Auth0Provider } from "@auth0/auth0-react";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <Auth0Provider
    domain="percymain.eu.auth0.com"
    clientId="a1ssRvNmTESmSmmWNiS8laHvt9q8ZYok"
    redirectUri={window.location.origin}
  >
    {element}
  </Auth0Provider>
);

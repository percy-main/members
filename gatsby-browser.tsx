import React from "react";
import { GatsbyBrowser } from "gatsby";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as config from "./src/config";

SuperTokens.init({
  appInfo: {
    appName: "Percy Main",
    apiDomain: config.GATSBY_API_DOMAIN,
    websiteDomain: config.GATSBY_APP_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  if (SuperTokens.canHandleRoute()) {
    // This renders the login UI on the /auth route
    return SuperTokens.getRoutingComponent()!;
  }
  return <SuperTokensWrapper>{element}</SuperTokensWrapper>;
};

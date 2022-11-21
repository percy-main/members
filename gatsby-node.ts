import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as config from "./src/config";

SuperTokens.init({
  appInfo: {
    appName: "Percy Main",
    apiDomain: config.GATSBY_API_DOMAIN,
    websiteDomain: config.GATSBY_APP_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/login",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

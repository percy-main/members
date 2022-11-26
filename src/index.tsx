import React from "react";
import ReactDOM from "react-dom/client";
import { Auth } from "./Auth";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as config from "./config";
import { Home } from "./routes/home";
import { MantineProvider } from "@mantine/core";
import { Onboarding } from "./routes/onboarding";
import { Layout } from "./Layout";

SuperTokens.init({
  appInfo: {
    appName: "Percy Main",
    apiDomain: config.REACT_APP_API_DOMAIN,
    websiteDomain: config.REACT_APP_APP_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/login",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SuperTokensWrapper>
        <Auth>
          <Onboarding>
            <Layout>
              <Home />
            </Layout>
          </Onboarding>
        </Auth>
      </SuperTokensWrapper>
    </MantineProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { LoginForm } from "./LoginForm";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import * as config from "./config";
import { Home } from "./routes/home";
import { MantineProvider } from "@mantine/core";
import { Onboarding } from "./routes/onboarding";
import { Layout } from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
        <QueryClientProvider client={new QueryClient()}>
          <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          <LoginForm>
            <SessionAuth>
              <Onboarding>
                <Layout>
                  <Home />
                </Layout>
              </Onboarding>
            </SessionAuth>
          </LoginForm>
        </QueryClientProvider>
      </SuperTokensWrapper>
    </MantineProvider>
  </React.StrictMode>
);

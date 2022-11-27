import React from "react";
import ReactDOM from "react-dom/client";
import { LoginForm } from "./LoginForm";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import * as config from "./config";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

SuperTokens.init({
  appInfo: {
    appName: "Percy Main",
    apiDomain: config.REACT_APP_API_DOMAIN,
    websiteDomain: config.REACT_APP_APP_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/login",
  },
  recipeList: [
    EmailPassword.init({
      getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
          return (
            "/onboarding" +
            (context.redirectToPath
              ? `?redirectToPath=${context.redirectToPath}`
              : "")
          );
        }
        return undefined;
      },
    }),
    Session.init(),
  ],
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
              <RouterProvider router={router} />
            </SessionAuth>
          </LoginForm>
        </QueryClientProvider>
      </SuperTokensWrapper>
    </MantineProvider>
  </React.StrictMode>
);

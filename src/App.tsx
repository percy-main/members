import React from "react";
import SuperTokens from "supertokens-auth-react";
import { Layout } from "./Layout";

export const App: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  if (SuperTokens.canHandleRoute()) {
    return SuperTokens.getRoutingComponent();
  }

  return <Layout>{children}</Layout>;
};

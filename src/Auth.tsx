import React from "react";
import SuperTokens from "supertokens-auth-react";

export const Auth: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  if (SuperTokens.canHandleRoute()) {
    return SuperTokens.getRoutingComponent();
  }

  return children;
};

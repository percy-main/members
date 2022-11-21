import { HeadFC } from "gatsby";
import React from "react";
import { SignInAndUp } from "supertokens-auth-react/recipe/emailpassword";

export default function Auth() {
  return <SignInAndUp />;
}

export const Head: HeadFC = () => <title>Login to PMCC</title>;

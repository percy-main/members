import * as React from "react";
import type { HeadFC } from "gatsby";
import { GATSBY_API_DOMAIN } from "../config";
import { MatchFeesApi } from "../api";
import { ApiResult } from "../api/types";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 400,
};

const paragraphStyles = {
  marginBottom: 48,
};

const IndexPage = () => {
  const [greeting, setGreeting] = React.useState(
    "Waiting for login to get a greeting"
  );

  React.useEffect(() => {
    new MatchFeesApi({ basePath: GATSBY_API_DOMAIN }).user
      .getMe()
      .then((response) => {
        switch (response.type) {
          case ApiResult.success:
            return setGreeting(`Hello ${response.data.name}`);
          case ApiResult.notFound:
            return setGreeting(
              `We don't seem to have a record for you, let's get started!`
            );
          case ApiResult.error:
            return setGreeting(
              `Our servers are having a little trouble right now.`
            );
        }
      });
  }, [setGreeting]);

  const logout = React.useCallback(async () => {
    await signOut();
    window.location.href = "/auth";
  }, []);

  return (
    <SessionAuth>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Percy Main Cricket Club</h1>
        <p style={paragraphStyles}>Watch this space</p>
        <p>{greeting}</p>
        <button onClick={logout}>Logout</button>
      </main>
    </SessionAuth>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

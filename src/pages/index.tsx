import * as React from "react";
import type { HeadFC } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import { Configuration, DefaultApi } from "../__generated__/matchFeesApi";
import { GATSBY_API_URL } from "../config";
import { AxiosError } from "axios";
import { MatchFeesApi } from "../api";
import { ApiResult } from "../api/types";

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
  const { loginWithRedirect, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  const [greeting, setGreeting] = React.useState(
    "Waiting for login to get a greeting"
  );

  React.useEffect(() => {
    console.log("Fetching greeting");
    if (!isAuthenticated) {
      return;
    }
    getAccessTokenSilently().then((accessToken) =>
      new MatchFeesApi({ basePath: GATSBY_API_URL, accessToken }).user
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
        })
    );
  }, [setGreeting, isAuthenticated]);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Percy Main Cricket Club</h1>
      <p style={paragraphStyles}>Watch this space</p>
      {isAuthenticated ? (
        <span>{greeting}</span>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

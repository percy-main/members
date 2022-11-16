import * as React from "react";
import type { HeadFC } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import * as config from "../config";

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
    getAccessTokenSilently().then((token) =>
      axios
        .get(config.GATSBY_API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setGreeting(response.data))
        .catch((err) => setGreeting(err.message))
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

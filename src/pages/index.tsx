import * as React from "react";
import type { HeadFC } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Percy Main Cricket Club</h1>
      <p style={paragraphStyles}>Watch this space</p>
      {isAuthenticated ? (
        <span>Hello {user?.name}</span>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

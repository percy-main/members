import React from "react";
import { SessionAuth, signOut } from "supertokens-auth-react/recipe/session";
import { REACT_APP_API_DOMAIN } from "config";
import { MatchFeesApi } from "api";
import { ApiResult } from "api/types";

export const Home: React.FC = () => {
  const [greeting, setGreeting] = React.useState(
    "Waiting for login to get a greeting"
  );

  React.useEffect(() => {
    new MatchFeesApi({ basePath: REACT_APP_API_DOMAIN }).user
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
    window.location.href = "/login";
  }, []);

  return (
    <SessionAuth>
      <main>
        <h1>Percy Main Cricket Club</h1>
        <p>Watch this space</p>
        <hr />
        <p>{greeting}</p>
        <button onClick={logout}>Logout</button>
      </main>
    </SessionAuth>
  );
};

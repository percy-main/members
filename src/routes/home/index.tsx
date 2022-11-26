import React from "react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { REACT_APP_API_DOMAIN } from "config";
import { MatchFeesApi } from "api";
import { ApiResult } from "api/types";
import { Text } from "@mantine/core";

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

  return (
    <SessionAuth>
      <Text>{greeting}</Text>
    </SessionAuth>
  );
};

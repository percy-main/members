import React, { useEffect, useState } from "react";
import { api, ApiResult } from "api";
import { User } from "__generated__/matchFeesApi";
import { match } from "ts-pattern";
import { Text } from "@mantine/core";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

type UserState =
  | { type: "ready"; data: User }
  | { type: "onboarding-required" }
  | { type: "error"; data: string }
  | { type: "loading" };

export const Onboarding: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserState>({ type: "loading" });

  useEffect(() => {
    api.user.getMe().then((response) => {
      switch (response.type) {
        case ApiResult.success:
          return setUser({ type: "ready", data: response.data });
        case ApiResult.notFound:
          return setUser({ type: "onboarding-required" });
        case ApiResult.error:
          return setUser({ type: "error", data: response.error.message });
      }
    });
  }, [setUser]);

  const onboarder = match(user)
    .with({ type: "ready" }, () => children)
    .with({ type: "loading" }, () => <Text>Loading</Text>)
    .with({ type: "error" }, (msg) => <Text>Error: {msg.data}</Text>)
    .with({ type: "onboarding-required" }, () => <Text>Onboarding</Text>)
    .exhaustive();

  return <SessionAuth>{onboarder}</SessionAuth>;
};

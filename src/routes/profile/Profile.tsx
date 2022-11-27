import React from "react";
import { api, ApiResult } from "api";
import { match } from "ts-pattern";
import { Text } from "@mantine/core";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ProfileDetailsForm } from "./DetailsForm";

export const Profile: React.FC = () => {
  const response = useQuery("current-user", () => api.user.getMe());
  const navigate = useNavigate();

  return match(response)
    .with(
      { status: "success", data: { type: ApiResult.success } },
      ({ data: { data: user } }) => <ProfileDetailsForm user={user} />
    )
    .with({ status: "success", data: { type: ApiResult.notFound } }, () => {
      navigate("/onboarding");
      return null;
    })
    .with(
      { status: "success", data: { type: ApiResult.error } },
      (response) => <Text>{response.data.error.message}</Text>
    )
    .with({ status: "loading" }, () => <Text>Loading</Text>)
    .with({ status: "error" }, () => (
      <Text>Issue reaching our API - check your connection?</Text>
    ))
    .run();
};

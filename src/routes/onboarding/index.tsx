import React from "react";
import { api, ApiResult } from "api";
import { match } from "ts-pattern";
import { Text } from "@mantine/core";
import { DetailsForm } from "./DetailsForm";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Onboarding: React.FC = () => {
  const response = useQuery("current-user", () => api.user.getMe());
  const [params] = useSearchParams();
  const navigate = useNavigate();

  return match(response)
    .with({ status: "success", data: { type: ApiResult.success } }, () => {
      navigate(params.get("redirectToPath") || "/");
      return null;
    })
    .with({ status: "success", data: { type: ApiResult.notFound } }, () => (
      <DetailsForm />
    ))
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

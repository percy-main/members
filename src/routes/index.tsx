import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "./home";
import { Onboarding } from "./onboarding";
import { Profile } from "./profile/Profile";

const NotFound = () => <div>Not Found</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "onboarding",
    element: <Onboarding />,
  },
]);

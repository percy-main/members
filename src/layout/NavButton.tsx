import { UnstyledButton, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export type NavButtonClickProps = {
  onClick?: () => void;
  children: string;
};

export type NavButtonToProps = {
  to?: string;
  children: string;
};

export type NavButtonProps = NavButtonClickProps | NavButtonToProps;

export const NavButton: React.FC<NavButtonProps> = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const action =
    "onClick" in rest
      ? rest.onClick
      : "to" in rest && rest.to
      ? () => navigate(rest.to!)
      : undefined;

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.black,

        "&:hover": {
          backgroundColor: theme.colors.gray[0],
        },
      })}
      onClick={action ?? undefined}
    >
      <Text size="sm">{children}</Text>
    </UnstyledButton>
  );
};

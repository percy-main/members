import { UnstyledButton, Text } from "@mantine/core";
import React from "react";

export type NavButtonProps = {
  onClick?: () => void;
  children: string;
};

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
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
      onClick={onClick}
    >
      <Text size="sm">{children}</Text>
    </UnstyledButton>
  );
};

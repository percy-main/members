import { AppShell, Navbar, Header, Text, Image, Group } from "@mantine/core";
import { useCallback } from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { NavButton } from "./NavButton";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const logout = useCallback(async () => {
    await signOut();
    window.location.href = "/auth";
  }, []);

  return (
    <AppShell
      padding="sm"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow>
            <NavButton to="/">Home</NavButton>
          </Navbar.Section>
          <Navbar.Section>
            <NavButton to="/profile">Profile</NavButton>
            <NavButton onClick={logout}>Logout</NavButton>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={80} p="xs">
          <Group>
            <Image src="club_logo.jpeg" width={60} />
            <Text size="xl">Percy Main Cricket Club</Text>
          </Group>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

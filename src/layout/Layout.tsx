import {
  AppShell,
  Navbar,
  Header,
  Text,
  Image,
  Group,
  Burger,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { useCallback, useState } from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { NavButton } from "./NavButton";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const logout = useCallback(async () => {
    await signOut();
    window.location.href = "/auth";
  }, []);

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="sm"
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          width={{ base: 300 }}
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
        >
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
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group>
              <Image src="club_logo.jpeg" width={60} />
              <Text size="xl">Percy Main Cricket Club</Text>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

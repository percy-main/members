import { AppShell, Navbar, Header, Text, UnstyledButton } from "@mantine/core";
import { useCallback } from "react";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

export const Layout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const logout = useCallback(async () => {
    await signOut();
    window.location.href = "/login";
  }, []);

  return (
    <AppShell
      padding="sm"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow>
            <Text size="sm">Home</Text>
          </Navbar.Section>
          <Navbar.Section>
            <UnstyledButton mb="xl" onClick={logout}>
              <Text size="sm">Logout</Text>
            </UnstyledButton>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Text size="xl">Percy Main Cricket Club</Text>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

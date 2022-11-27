import { Button, Container, Text, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { sendVerificationEmail } from "supertokens-auth-react/recipe/emailverification";
import { UserDTO } from "../../__generated__/membersApi";

export const ProfileDetailsForm: React.FC<{ user: UserDTO }> = ({ user }) => {
  const [emailSent, setEmailSent] = useState(false);

  const onVerificationClick = useCallback(() => {
    sendVerificationEmail().then(() => setEmailSent(true));
  }, [setEmailSent]);

  return (
    <Container size="xl" mt="lg">
      <form style={{ maxWidth: "320px", width: "100%" }}>
        <TextInput label="Name" size="lg" disabled value={user.name} />
        <DatePicker
          label="Date of Birth"
          size="lg"
          mt="lg"
          disabled
          value={dayjs(user.dob).toDate()}
        />
        <TextInput
          label="Email"
          mt="lg"
          size="lg"
          disabled
          value={user.email}
        />
      </form>

      {!user.emailIsVerified && (
        <>
          <Text>Your email is not verified.</Text>
          {emailSent ? (
            <Text>Check your email</Text>
          ) : (
            <Button onClick={onVerificationClick}>
              Send verification email
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

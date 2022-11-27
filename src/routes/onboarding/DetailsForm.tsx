import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import dayjs, { Dayjs } from "dayjs";
import { useMutation, useQueryClient } from "react-query";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { api, ApiResult } from "../../api";

type FormInputs = {
  name: string;
  dob: Dayjs | undefined;
};

export const DetailsForm: React.FC = () => {
  const form = useForm<FormInputs>({
    initialValues: {
      name: "",
      dob: undefined,
    },
    validate: {
      name(name: string) {
        if (!name) {
          return "Please enter your name.";
        }
        return null;
      },
      dob: (dob: Dayjs | undefined) => {
        if (!dob) {
          return "Please enter your date of birth.";
        }
        if (dayjs().diff(dob, "year") < 13) {
          return "Sorry you must be at least 13 years old to become a member.";
        }
        return null;
      },
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(api.user.createUser, {
    onSuccess: (response) => {
      response.type === ApiResult.success &&
        queryClient.setQueryData("current-user", response);
    },
  });

  const session = useSessionContext();

  if (session.loading) {
    // Shouldn't happen - this page won't load unless the session is loaded
    return null;
  }

  return (
    <Container size="xl" mt="lg">
      <Stack>
        <Center>
          <Title order={1}>Welcome to The Main!</Title>
        </Center>
        <Center>
          <Text size="md">
            We need some details about you to set up your membership.
          </Text>
        </Center>
        <Group position="center" mt="xl">
          <form
            onSubmit={form.onSubmit((values) => {
              mutation.mutateAsync({
                ...values,
                dob: values.dob!.toISOString(),
              });
            })}
            style={{ maxWidth: "320px", width: "100%" }}
          >
            <TextInput
              withAsterisk
              label="Name"
              size="lg"
              {...form.getInputProps("name")}
            />
            <DatePicker
              withAsterisk
              label="Date of Birth"
              size="lg"
              mt="lg"
              {...form.getInputProps("dob")}
            />
            <Group position="right" mt="xl">
              <Button type="submit">Save my details</Button>
            </Group>
          </form>
        </Group>
      </Stack>
    </Container>
  );
};

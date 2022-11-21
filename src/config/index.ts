const getEnv = (val: string | undefined, name: string) => {
  if (!val) {
    throw new Error(`Env var ${name} is not defined`);
  }

  return val;
};

export const GATSBY_APP_DOMAIN = getEnv(
  process.env.GATSBY_APP_DOMAIN,
  "GATSBY_APP_DOMAIN"
);
export const GATSBY_API_DOMAIN = getEnv(
  process.env.GATSBY_API_DOMAIN,
  "GATSBY_API_DOMAIN"
);
export const GATSBY_AUTH_DOMAIN = getEnv(
  process.env.GATSBY_AUTH_DOMAIN,
  "GATSBY_AUTH_DOMAIN"
);

const getEnv = (val: string | undefined, name: string) => {
  if (!val) {
    throw new Error(`Env var ${name} is not defined`);
  }

  return val;
};

export const REACT_APP_APP_DOMAIN = getEnv(
  process.env.REACT_APP_APP_DOMAIN,
  "REACT_APP_APP_DOMAIN"
);
export const REACT_APP_API_DOMAIN = getEnv(
  process.env.REACT_APP_API_DOMAIN,
  "REACT_APP_API_DOMAIN"
);
export const REACT_APP_AUTH_DOMAIN = getEnv(
  process.env.REACT_APP_AUTH_DOMAIN,
  "REACT_APP_AUTH_DOMAIN"
);

const getEnv = (val: string | undefined, name: string) => {
    if (!val) {
        throw new Error(`Env var ${name} is not defined`)
    }

    return val
}

export const GATSBY_API_AUDIENCE = getEnv(process.env.GATSBY_API_AUDIENCE, "GATSBY_API_AUDIENCE")
export const GATSBY_API_URL = getEnv(process.env.GATSBY_API_URL, "GATSBY_API_URL")
export const GATSBY_AUTH_CLIENT_ID = getEnv(process.env.GATSBY_AUTH_CLIENT_ID, "GATSBY_AUTH_CLIENT_ID")
export const GATSBY_AUTH_DOMAIN = getEnv(process.env.GATSBY_AUTH_DOMAIN, "GATSBY_AUTH_DOMAIN")


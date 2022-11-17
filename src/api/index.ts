import { Configuration, DefaultApi } from "../__generated__/matchFeesApi";

export interface MatchFeesApiOptions {
    basePath: string
    accessToken: string
}

export class MatchFeesApi {
    private readonly apiClient: DefaultApi
    private readonly accessToken: string

    constructor({ basePath, accessToken }: MatchFeesApiOptions) {
        this.apiClient = new DefaultApi(new Configuration({ basePath }))
        this.accessToken = accessToken
    }

    public get user() {
        return new MatchFeesUserApi(this.apiClient, this.accessToken)
    }
}

class MatchFeesUserApi {
    constructor(private readonly apiClient: DefaultApi, private readonly accessToken: string) {}
    
    public async getMe() {
        const res = await this.apiClient.userControllerGetMe(`Bearer ${this.accessToken}`);
        return res.data;
    }
}
import { REACT_APP_API_DOMAIN } from "../config";
import { Configuration, DefaultApi } from "../__generated__/matchFeesApi";
import { RequestRunner } from "./runner";

export interface MatchFeesApiOptions {
  basePath: string;
}

class Api {
  private readonly apiClient: DefaultApi;

  constructor({ basePath }: MatchFeesApiOptions) {
    this.apiClient = new DefaultApi(new Configuration({ basePath }));
  }

  public get user() {
    return new UserApi(this.apiClient);
  }
}

class UserApi {
  private readonly requestRunner: RequestRunner = new RequestRunner();

  constructor(private readonly apiClient: DefaultApi) {}

  public async getMe() {
    return this.requestRunner.runApiRequest(() =>
      this.apiClient.userControllerGetMe()
    );
  }
}

export const api = new Api({ basePath: REACT_APP_API_DOMAIN });
export * from "./types";

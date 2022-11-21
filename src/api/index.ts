import { Configuration, DefaultApi, User } from "../__generated__/matchFeesApi";
import { RequestRunner } from "./runner";
import { ApiResponse, ApiResult } from "./types";

export interface MatchFeesApiOptions {
  basePath: string;
}

export class MatchFeesApi {
  private readonly apiClient: DefaultApi;

  constructor({ basePath }: MatchFeesApiOptions) {
    this.apiClient = new DefaultApi(new Configuration({ basePath }));
  }

  public get user() {
    return new MatchFeesUserApi(this.apiClient);
  }
}

class MatchFeesUserApi {
  private readonly requestRunner: RequestRunner = new RequestRunner();

  constructor(private readonly apiClient: DefaultApi) {}

  public async getMe() {
    return this.requestRunner.runApiRequest(() =>
      this.apiClient.userControllerGetMe()
    );
  }
}

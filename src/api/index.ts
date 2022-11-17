import { Configuration, DefaultApi, User } from "../__generated__/matchFeesApi";
import { RequestRunner } from "./runner";
import { ApiResponse, ApiResult } from "./types";

export interface MatchFeesApiOptions {
  basePath: string;
  accessToken: string;
}

export class MatchFeesApi {
  private readonly apiClient: DefaultApi;
  private readonly accessToken: string;

  constructor({ basePath, accessToken }: MatchFeesApiOptions) {
    this.apiClient = new DefaultApi(new Configuration({ basePath }));
    this.accessToken = accessToken;
  }

  public get user() {
    return new MatchFeesUserApi(this.apiClient, this.accessToken);
  }
}

class MatchFeesUserApi {
  private readonly requestRunner: RequestRunner = new RequestRunner();

  constructor(
    private readonly apiClient: DefaultApi,
    private readonly accessToken: string
  ) {}

  public async getMe() {
    return this.requestRunner.runApiRequest(() =>
      this.apiClient.userControllerGetMe(`Bearer ${this.accessToken}`)
    );
  }
}

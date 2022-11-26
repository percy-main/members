import { REACT_APP_API_DOMAIN } from "../config";
import {
  Configuration,
  CreateUserDTO,
  DefaultApi,
} from "../__generated__/membersApi";
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

  public getMe = () => {
    return this.requestRunner.runApiRequest(() =>
      this.apiClient.userControllerGetMe()
    );
  };

  public createUser = (user: CreateUserDTO) => {
    return this.requestRunner.runApiRequest(() =>
      this.apiClient.userControllerCreateUser(user)
    );
  };
}

export const api = new Api({ basePath: REACT_APP_API_DOMAIN });
export * from "./types";

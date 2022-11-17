import { AxiosError, AxiosResponse } from "axios";
import { ApiResponse, ApiResult } from "./types";

export class RequestRunner {
  public async runApiRequest<T>(
    f: () => Promise<AxiosResponse<T & { message?: string }>>
  ): Promise<ApiResponse<T>> {
    try {
      const res = await f();

      return this.translateResponse(res);
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        return this.translateResponse(err.response);
      }
      return { type: ApiResult.error, error: err as Error };
    }
  }

  private translateResponse<T>(
    res: AxiosResponse<T & { message?: string }>
  ): ApiResponse<T> {
    const statusXX = `${Math.floor(res.status / 100)}xx` as const;

    switch (statusXX) {
      case "2xx":
        return { type: ApiResult.success, data: res.data };
      case "4xx":
        return {
          type: ApiResult.notFound,
          message: res.data?.message ?? "Not found",
        };
      case "5xx":
      default:
        return {
          type: ApiResult.error,
          error: new Error(res.data?.message ?? "Error"),
        };
    }
  }
}

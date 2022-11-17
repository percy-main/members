export enum ApiResult {
    success,
    notFound,
    error,
}

type ApiSuccess<T> = {
    type: ApiResult.success
    data: T
}

type ApiNotFound = {
    type: ApiResult.notFound
    message: string
}

type ApiError = {
    type: ApiResult.error
    error: Error
}

export type ApiResponse<T> =
  | ApiSuccess<T>
  | ApiNotFound
  | ApiError

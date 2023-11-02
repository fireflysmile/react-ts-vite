export enum StatusCodeEnum {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  ValidationFailed = 422,
  InternalServerError = 500,
  GoneRequest = 410,
  PreconditionFailed = 412,
  PageNotFound = 404,
}

export enum InputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
}

export enum PasswordRuleEnum {
  LEAST_ONE_LOWER_CASE = 1,
  LEAST_ONE_UPPER_CASE = 2,
  LEAST_ONE_NUMBER = 3,
  LEAST_ONE_SPECIAL_CHARACTER = 4,
  MIN = 5,
}

export enum ToastTypeEnum {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export enum RadioGroupDirection {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum SortDirectionEnum {
  DESC = 'desc',
  ASC = 'asc',
}

export enum AlertTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export enum DateRangeOptionEnum {
  ON = 'on',
  IN = 'in',
  BEFORE = 'before',
  AFTER = 'after',
  BETWEEN = 'between',
}

export enum UploadStatusEnum {
  UPLOADING = 'uploading',
  SUCCESS = 'success',
  ERROR = 'error',
  DONE = 'done',
}

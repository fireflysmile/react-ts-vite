import { DEFAULT_LANGUAGE } from 'config/constants';
import { StatusCodeEnum } from 'enums/app';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};
let instance: AxiosInstance = null;

const handleRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  try {
    const { getAccessToken } = useCookies();
    if (getAccessToken() != null) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
    config.headers.Language = DEFAULT_LANGUAGE;

    return config;
  } catch (error) {
    throw new Error(error as string);
  }
};

const handleResponseSuccess = (response: AxiosResponse) => {
  return response.data;
};

const handleResponseError = (error: AxiosError<App.ResponseError>) => {
  const status = get(error, 'response.status');
  const errorData = get(error, 'response.data');
  const { getUserInfo, revokeUser } = useCookies();

  switch (status) {
    case StatusCodeEnum.Unauthorized: {
      if (getUserInfo()) {
        revokeUser();
        windowRedirect('/sign-in');
      }
      break;
    }
    case StatusCodeEnum.ValidationFailed:
    case StatusCodeEnum.GoneRequest:
    case StatusCodeEnum.PreconditionFailed:
    case StatusCodeEnum.BadRequest: {
      return Promise.reject({ ...errorData, status });
    }
    case StatusCodeEnum.Forbidden:
    case StatusCodeEnum.InternalServerError:
    case StatusCodeEnum.TooManyRequests: {
      break;
    }
  }
  return Promise.reject({ ...errorData });
};

export default function useHttpRequest<T>(
  config: Partial<AxiosRequestConfig>,
): Promise<T> {
  if (!instance) {
    instance = axios.create({
      baseURL: API_URL,
      headers,
    });

    instance.interceptors.request.use(handleRequest, (error: AxiosError) =>
      Promise.reject(error),
    );

    instance.interceptors.response.use(
      handleResponseSuccess,
      handleResponseError,
    );
  }

  return instance(config.url, config);
}

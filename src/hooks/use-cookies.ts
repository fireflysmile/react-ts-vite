import UniversalCookie from 'universal-cookie';

let cookie: UniversalCookie = null;

// eslint-disable-next-line max-lines-per-function
export default function useCookies() {
  if (!cookie) {
    cookie = new UniversalCookie();
  }

  const options = {
    path: '/',
  };

  const getAccessToken = (): string => {
    return cookie.get('token');
  };

  const getUserInfo = (): Auth.User => {
    return cookie.get('userInfo');
  };

  const isAuthenticated = (): boolean => {
    return Boolean(cookie.get('userInfo') && cookie.get('token'));
  };

  const setUserInfo = (data: Auth.User): void => {
    cookie.set('userInfo', data, options);
  };

  const setAccessToken = (token: string): void => {
    cookie.set('token', token, options);
  };

  const revokeUser = (): void => {
    cookie.remove('token', options);
    cookie.remove('userInfo', options);
  };

  return {
    getUserInfo,
    revokeUser,
    isAuthenticated,
    setUserInfo,
    setAccessToken,
    getAccessToken,
  };
}

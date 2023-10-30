export const logOut = (): Promise<void> =>
  useHttpRequest({ url: '/auth/logout', method: 'DELETE' });

export const signIn = (
  data: Auth.UserCertificate,
): Promise<Auth.UserAuthentication> =>
  useHttpRequest({ url: '/signin', method: 'POST', data });

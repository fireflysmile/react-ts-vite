export const logOut = (): Promise<void> =>
  useHttpRequest({ url: '/logout', method: 'DELETE' });

export const signUp = (
  data: Auth.UserCertificate,
  ): Promise<Auth.UserAuthentication> =>
  useHttpRequest({ url: '/signup', method: 'POST', data });
    
export const signIn = (
  data: Auth.UserCertificate,
): Promise<Auth.UserAuthentication> =>
  useHttpRequest({ url: '/signin', method: 'POST', data });
import type { SetState, Actions, State } from './types';

const createAction = (set: SetState<State>): Actions => ({
  signIn: async (credentials: Auth.UserCertificate) => {
    const { setUserInfo, setAccessToken } = useCookies();
    const response = await signIn(credentials);
    const { accessToken, user } = response;
    console.log(accessToken)
    set(() => ({ accessToken, userInfo: user }));
    setAccessToken(accessToken);
    setUserInfo(user);
  },
  signOut: async () => {
    await logOut();
    const { revokeUser } = useCookies();
    revokeUser();
    set(() => ({ accessToken: null, userInfo: null }));
  },
});

export default createAction;

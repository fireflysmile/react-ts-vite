import type { State } from './types';

const { getUserInfo, getAccessToken } = useCookies();
const userInfo = getUserInfo();
const accessToken = getAccessToken();

const initialState: State = {
  userInfo,
  accessToken,
};

export default initialState;

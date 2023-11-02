import useAuthStore from 'stores/auth';

const useIsLoggedIn = () => {
  const accessToken = useAuthStore.use.accessToken();
  const userInfo = useAuthStore.use.userInfo();

  const isLoggedIn = useMemo(
    () => Boolean(userInfo && accessToken),
    [accessToken, userInfo],
  );

  return isLoggedIn;
};

export default useIsLoggedIn;

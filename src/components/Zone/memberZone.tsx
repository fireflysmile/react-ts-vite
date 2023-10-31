//import useIsLoggedIn from 'hooks/use-is-logged-in';

export default () =>
  (WrappedComponent: ComponentType<App.LayoutComponent<ReactNode>>) =>
  (props: App.LayoutComponent<ReactNode>) => {
    const navigate = useNavigate();
    const { isAuthenticated, getUserInfo } = useCookies();
    const isLoggedIn = useIsLoggedIn();

    useEffect(() => {
      if (!isAuthenticated() && !isLoggedIn) {
        navigate('/lab');
      }
    }, [isLoggedIn]);

    if (isLoggedIn || isAuthenticated()) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };

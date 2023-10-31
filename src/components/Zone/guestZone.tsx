//import useIsLoggedIn from 'hooks/use-is-logged-in';

export default () =>
  (WrappedComponent: ComponentType<App.LayoutComponent<ReactNode>>) =>
  (props: App.LayoutComponent<ReactNode>) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useCookies();
    const isLoggedIn = useIsLoggedIn();

    useEffect(() => {
      if (isLoggedIn || isAuthenticated()) {
        navigate('/lab2');
      }
    }, [isLoggedIn]);

    if (!isLoggedIn || !isAuthenticated()) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };

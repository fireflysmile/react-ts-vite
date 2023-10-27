import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

export default [
  {
    path: '/',
    element: <Dashboard />
  },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <PageNotFound /> }
];
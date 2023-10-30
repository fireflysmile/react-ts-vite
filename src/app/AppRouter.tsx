import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import Lab1 from '../pages/lab/hook/lab1';

export default [
  {
    path: '/',
    element: <Dashboard />
  },
  { path: '/lab', element: <Lab1 /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <PageNotFound /> }
];
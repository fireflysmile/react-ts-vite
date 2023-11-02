import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import Lab1 from '../pages/lab/hook/lab1';
import Lab2 from '../pages/lab/hook/lab2';

export default [
  {
    path: '/',
    element: <Dashboard />
  },
  { path: '/lab', element: <Lab1 /> },
  { path: '/lab2', element: <Lab2 /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <PageNotFound /> }
];
import Main from '@pages/main';
import { RouteType } from '@typings/routeType';
import { Navigate } from 'react-router-dom';

export const mainRoutes: RouteType[] = [
  {
    path: '/',
    element: <Navigate to="/auth/login" replace={true} />,
  },
  {
    path: '/:memberId',
    element: <Main />,
  },
];

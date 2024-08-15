import SingUp from '@pages/auth/join';
import Login from '@pages/auth/login';
import { RouteType } from '@typings/routeType';

export const authRoutes: RouteType[] = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/join',
    element: <SingUp />,
  },
];

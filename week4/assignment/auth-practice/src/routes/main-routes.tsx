import Main from '@pages/main';
import { RouteType } from '@typings/routes/routeType.ts';

export const mainRoutes: RouteType[] = [
  {
    path: '/',
    element: <Main />,
  },
];

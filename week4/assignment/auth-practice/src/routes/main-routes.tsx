import Main from '@pages/main';
import { RouteType } from '@typings/routeType';

export const mainRoutes: RouteType[] = [
  {
    path: '/:memberId',
    element: <Main />,
  },
];

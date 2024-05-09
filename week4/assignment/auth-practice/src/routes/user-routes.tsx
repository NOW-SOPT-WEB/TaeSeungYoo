import MyPage from '@pages/user/my-page';
import { RouteType } from '@typings/routes/routeType.ts';

export const userRoutes: RouteType[] = [
  {
    path: '/user/my-page',
    element: <MyPage />,
  },
];

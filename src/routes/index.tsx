import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { Card } from '../pages';
import { Category } from '../pages';
import { Home } from '../pages';
import { NotFound } from '../pages';

const Routes = () => {
  const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    {
      path: '/category',
      children: [
        // TODO index?
        { index: true, element: <Category /> },
        { path: ':id', element: <Card /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Routes;

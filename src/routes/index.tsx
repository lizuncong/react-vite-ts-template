import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home'));
const Dashboard = lazy(() => import(/* webpackChunkName: 'dashboard' */ '../pages/Dashboard'));

createBrowserRouter([
  { index: true, Component: Home },
  {
    Component: Dashboard,
    path: '/dashboard',
    children: [],
  },
]);

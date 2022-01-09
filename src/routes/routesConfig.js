import HomaPage from '@containers/HomaPage';
import Login from '@components/Login';
import Register from '@components/Register';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomaPage,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  }
]

export default routesConfig;
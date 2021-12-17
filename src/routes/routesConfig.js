import Feedback from '@components/Feedback';
import Login from '@components/Login';
import Register from '@components/Register';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Feedback,
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
]

export default routesConfig;
import HomaPage from '@containers/HomaPage';
import Login from '@components/Login';
import Register from '@components/Register';
import NotFoundPage from '@containers/NotFoundPage';
import FeedbackPage from '@containers/FeedbackPage';
import CreateFeedbackPage from '@containers/CreateFeedbackPage';
import FeedbackCategories from '@containers/FeedbackCategories';

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
    path: '/posts/:id',
    exact: true,
    component: FeedbackPage,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/register',
    exact: true,
    component: FeedbackCategories,
  },
  {
    path: '/categories',
    exact: true,
    component: FeedbackCategories,
  },
  {
     path: '/addplace',
     exact: true,
     component: CreateFeedbackPage,
   },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  }
]

export default routesConfig;
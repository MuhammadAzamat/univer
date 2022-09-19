import adminroute from '../admin/route';
import authroute from '../auth/route';
import { WelcomePage } from './';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    authroute,
    adminroute
  ],
};

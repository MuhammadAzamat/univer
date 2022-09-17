// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Login, Layout } from './';
import Register from './Register/Register';

export default {
  path: 'auth',
  component: Layout,
  childRoutes: [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
  ],
};

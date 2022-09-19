// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import { Redirect } from "react-router-dom";
import { Layout } from "./";
import Login from "./login";
import Register from "./Register/Register";

export default {
  path: "auth",
  component: Layout,
  childRoutes: [
    { path: "login", component: Login, isIndex: true  },
    { path: "register", component: Register },
  ],
};

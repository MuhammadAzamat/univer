import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from "connected-react-router";
import history from "./history";
import commonReducer from "../features/common/redux/reducer";
import headersReducer from "../features/headers/redux/reducer";
import navbarsReducer from "../features/navbars/redux/reducer";
import sidebarsReducer from "../features/sidebars/redux/reducer";
import footersReducer from "../features/footers/redux/reducer";
import authReducer from "../features/auth/redux/reducer";
import adminReducer from "../features/admin/redux/reducer";
import paymentReducer from "../features/payment/redux/reducer";
// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: connectRouter(history),
  common: commonReducer,
  payment: paymentReducer,
  headers: headersReducer,
  navbars: navbarsReducer,
  sidebars: sidebarsReducer,
  footers: footersReducer,
  auth: authReducer,
  admin: adminReducer,
};

export default combineReducers(reducerMap);

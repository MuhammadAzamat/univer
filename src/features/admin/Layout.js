import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";
import { Header } from "../headers";
import { AdminNavbar } from "../navbars";
import { Sidebar } from "../sidebars";
import route from "./route";

import { Layout as LayoutAnt, Menu } from "antd";

// import PropTypes from 'prop-types';

export default function Layout({ history, children }) {

  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const mainRef = useRef(null);

  const routes = route;
  // routes.push(orerroute.childRoutes.map(item => (orerroute.path + "/" + item.path)))

  const orders_data = useQuery("orders", null);

  const [orders, setorders] = useState([]);
  useEffect(() => {
    let cancel = true;
    if (cancel) {
      if (orders_data.data && orders_data.data.orders) {
        setorders(orders_data.data.orders);
      }else{
        setorders([])
      }
      cancel = false;
    }
  }, [orders_data.data]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainRef.current.scrollTop = 0;
  }, [mainRef]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.childRoutes.length; i++) {
      if (
        history.location.pathname.indexOf(
          routes.path + "/" + routes.childRoutes[i].path
        ) !== -1 &&
        routes.childRoutes[i].path !== ""
      ) {
        return routes.childRoutes[i].name;
      }
    }
    return "Brand";
  };
  return (
    (true && (
      <LayoutAnt className="layout-container">
        <Sidebar
          // {...this.props}
          collapsed={collapsed}
          routes={routes}
          logo={{
            innerLink: "/dashboard/index",
            imgSrc: require("../../assets/img/logo.svg"),
            imgAlt: "...",
          }}
          orders={orders}
        />
        <div className="main-content" ref={(el) => (mainRef.current = el)}>
          {/* <AdminNavbar
            // {...this.props}
            brandText={getBrandText(history.location.pathname)}
          /> */}
          <Header collapsed={collapsed} setCollapsed={null} />
          {children}
        </div>
      </LayoutAnt>
    )) || <Redirect from="/" to={"/auth/login"} />
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};
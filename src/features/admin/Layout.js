import route from "./route";
import { Header } from "../headers";
import { Sidebar } from "../sidebars";
import { useQuery } from "react-query";
import { Layout as LayoutAnt } from "antd";
import { Redirect } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

// import PropTypes from 'prop-types';

export default function Layout({ history, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [token, _] = useState(localStorage.getItem("Authorization") || null);
  const routes = route;
  const mainRef = useRef(null);
  const orders_data = useQuery("orders", null);

  const [orders, setorders] = useState([]);
  useEffect(() => {
    let cancel = true;
    if (cancel) {
      if (orders_data.data && orders_data.data.orders) {
        setorders(orders_data.data.orders);
      } else {
        setorders([]);
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
    (token && (
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
    )) || <Redirect from="/" to={"/admin/index"} />
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};

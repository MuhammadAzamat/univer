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
  const [token, setToken] = useState(
    localStorage.getItem("Authorization") || null
  );
  const routes = route;
  const mainRef = useRef(null);
  
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
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/logo.svg"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref={mainRef}>
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

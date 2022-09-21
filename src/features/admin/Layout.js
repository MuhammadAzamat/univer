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
  const routes = route;
  const mainRef = useRef(null);
  const token = localStorage.getItem("Authorization") || null;
  if (token == null) {
    window.location.pathname = "/auth/login";
  }

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
    <LayoutAnt className="layout-container">
      <Sidebar
        // {...this.props}
        className="side-bar-menu"
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
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};

import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import SidebarStep from "./sidebarComponents/sidebarStep";
import SidebarMenu from "./sidebarMenu/sidebarMenu";
import { Layout as LayoutAnt } from "antd";

const Sidebar = ({ bgColor, routes, logo, location, collapsed }) => {
  const [collapseOpen, setcollapseOpen] = useState(false);

  const { Sider } = LayoutAnt;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setcollapseOpen((collapseOpen) => !collapseOpen);
  };
  // closes the collapse
  const closeCollapse = () => {
    setcollapseOpen(false);
  };

  const createLinks = (routes, path) => {
    return routes.childRoutes.map((prop, key) => {
      if (prop.path !== "" && !prop.childRoutes) return <>link</>;
    });
  };

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }
  return (
    <>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={253}
      >
        <div className="logo">
          <img width={140} src={require("../../assets/img/univerlogo.png")} />
        </div>
        <SidebarStep />
        <SidebarMenu />
      </Sider>
    </>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

export default Sidebar;

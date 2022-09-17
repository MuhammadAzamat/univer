import { Layout as LayoutAnt } from 'antd';
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export default function Header({ collapsed, setCollapsed }) {

  return (
    <LayoutAnt.Header
      style={{
        padding: 0,
        background: "red",
      }}
    >
      {/* {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        }
      )} */}
    </LayoutAnt.Header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

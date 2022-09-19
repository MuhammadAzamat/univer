import { Layout as LayoutAnt } from "antd";
import React, { useEffect, useState } from "react";
import { Input, Space, Select } from "antd";

// import PropTypes from 'prop-types';

import { BellOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

export default function Header({ collapsed, setCollapsed }) {
  const onSearch = (value) => console.log(value);

  return (
    <LayoutAnt.Header
      style={{
        padding: 0,
        background: "white",
      }}
    >
      <div className="header">
        <div className="search">
          <Input
            placeholder="Qidiruv"
            allowClear
            onChange={onSearch}
            prefix={<img src={require("../../assets/img/Search.png")}/>}
          />
        </div>
        <div className="flex header-notify">
          <div>
            <Select defaultValue="uz" className="select-before">
              <Option value="uz"><img style={{ marginRight: 10 }} src={require("../../assets/img/flags.png")} alt="uz" />uz</Option>
              {/* <Option value="en"><img style={{ marginRight: 10 }} src={require("../../assets/img/flags.png")} alt="en" />en</Option> */}
            </Select>
          </div>
          <div className="bg">
            <BellOutlined />
          </div>
          <div className="bg">
            <UserOutlined />
          </div>
        </div>
      </div>
    </LayoutAnt.Header>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

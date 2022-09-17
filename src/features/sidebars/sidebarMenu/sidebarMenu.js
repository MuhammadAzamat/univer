import {
  FileDoneOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Ariza topshirish", "1", <FileDoneOutlined />),
  getItem("Bildirishnomalar", "2", <MailOutlined />),
  getItem("Sozlamalar", "3", <SettingOutlined />),
  getItem("Tizimdan chiqish", "4", <LogoutOutlined />),
];

const SidebarMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      className="sidebarMenu"
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      //   defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SidebarMenu;

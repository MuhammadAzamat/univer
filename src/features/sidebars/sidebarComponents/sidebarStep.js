import { Steps, Divider } from "antd";
import React from "react";
import "./sidebarStep.css";
import { UserOutlined } from "@ant-design/icons";

const { Step } = Steps;

const SidebarStep = () => (
  <div>
    <div className="divider">
      <Divider />
    </div>
    <div className="flex profil">
      <UserOutlined className="bg" />
      <div className="avatar-content">
        <p>Islom Tursunov</p>
        <p>+998907774422</p>
      </div>
    </div>
    <Steps className="sidebarStep" direction="vertical" current={1}>
      <Step title="Ro'yxatdan o'tdingiz" description="" />
      <Step title="Ariza topshirildi" description="" />
      <Step title="Ariza qabul qilindi" description="" />
      <Step title="Imtihon" description="" />
      <Step title="Natijalar" description="" />
    </Steps>
    <div className="divider">
      <Divider />
    </div>
  </div>
);

export default SidebarStep;

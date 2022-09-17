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
        <p className="avatar-title">Islom Tursunov</p>
        <p className="avatar-title">+998907774422</p>
      </div>
    </div>
    <div className="sidebarStep">
      <Steps size="small" direction="vertical" current={1}>
        <Step
          className="stepTitle"
          title="Ro'yxatdan o'tdingiz"
          description=""
        />
        <Step className="stepTitle" title="Ariza topshirildi" description="" />
        <Step
          className="stepTitle"
          title="Ariza qabul qilindi"
          description=""
        />
        <Step className="stepTitle" title="Imtihon" description="" />
        <Step className="stepTitle" title="Natijalar" description="" />
      </Steps>
      <Divider />
    </div>
  </div>
);

export default SidebarStep;

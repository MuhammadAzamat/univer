import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
const Step0 = ({ onForward }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return (
    <Content className="site-layout-background">
      <div className="site-layout-wrapper">
        <h2>
          Assalomu alaykum {user?.first_name} {user?.last_name}
        </h2>
        <p>
          IIT ning o’qishga imtixon topshirish uchun tizimiga hush kelibsiz.
        </p>
        <p> Imtihonga kirishdan oldin ariza topshirishingiz kerak.</p>
        <img
          alt="img"
          className="order-placed-img"
          src={require("../../../assets/img/OrderPlaced.png")}
        />
        <div className="site-layout-buttons">
          <button disabled={true} className="btn-content" type="button">
            O'qishni ko'chirish
          </button>
          <button type="button" onClick={onForward} className="btn-content">
            Ariza topshirish
          </button>
        </div>
      </div>
    </Content>
  );
};

export default Step0;

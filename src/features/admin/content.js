import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
const ContentComp = ({setstatus}) => {
  return (
    <Content className="site-layout-background">
      <div className="site-layout-wrapper">
        <h2>Assalomu alaykum userName</h2>
        <p>
          IIT ning o’qishga imtixon topshirish uchun tizimiga hush kelibsiz.
          Imtihonga kirishdan oldin ariza topshirishingiz kerak
        </p>
        <img className="order-placed-img" src={require("../../assets/img/OrderPlaced.png")} alt="img" />
        <div className="site-layout-buttons">
          <button className="btn-content" type="button">
            O'qishni ko'chirish
          </button>
          <button className="btn-content" type="button" onClick={()=>{
            setstatus('step_1')
          }}>
            Ariza topshirish
          </button>
        </div>
      </div>
    </Content>
  );
};

export default ContentComp;

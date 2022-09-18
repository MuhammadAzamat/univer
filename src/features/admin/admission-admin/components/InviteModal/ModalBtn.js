import "./modalBtn.css";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { DatePicker, Space, TimePicker } from "antd";
const { Option } = Select;

const ModalBtn = ({ showModal, colback }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   useEffect(() => {
      setIsModalOpen(showModal);
      console.log("sdfsdfsdfdfsf465", isModalOpen);
   }, [showModal]);
   const handleOk = (e) => {
      e.preventDefault();
      setIsModalOpen(false);
      colback(false);
   };

   const handleCancel = (e) => {
      e.preventDefault();
      colback(false);
      setIsModalOpen(false);
   };
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const onChange = (date, dateString) => {
      console.log(date, dateString);
   };

   const PickerWithType = ({ type, onChange }) => {
      if (type === "time") return <TimePicker onChange={onChange} />;
      return <DatePicker picker={type} onChange={onChange} />;
   };
   return (
      <>
         <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} height={700} width={650}>
            <div>
               <div className="invite_title">
                  <h1>Imtihonga taklif qilish</h1>
                  <p>24 ta ariza tanlandi</p>
               </div>
               <form className="invite_modal_form">
                  <div className="invite_modal_form_child">
                     <h3>Imtihon joyi</h3>
                     <h3>Imtihon kuni</h3>
                     <h3>Imtihon vaqti</h3>
                  </div>
                  <div className="invite_information">
                     <Select
                        className="invite_modal_select"
                        defaultValue="Olamzor"
                        style={{
                           width: 350,
                           height: 45,
                           borderRadius: 7,
                        }}
                        onChange={handleChange}
                     >
                        <Option value="Olmazor" className="Modal_option_Olmazor">
                           Olmazor tumani, Usta Shirin ko'chasi 116-uy
                        </Option>
                        <Option value="Toshkent" className="Modal_option_Toshkent">
                           Toshkent shahri, Yangi hayot tumani, Qanora ko'chasi 44-uy
                        </Option>
                     </Select>

                     <Space direction="vertical">
                        <DatePicker
                           onChange={onChange}
                           style={{
                              width: 350,
                              height: 45,
                              borderRadius: 7,
                           }}
                        />
                     </Space>
                     <Space direction="vertical">
                        <TimePicker
                           onChange={onChange}
                           style={{
                              width: 350,
                              height: 45,
                              borderRadius: 7,
                           }}
                        />
                     </Space>
                  </div>
                  <div className="invite_btn">
                     <button onClick={(e) => handleCancel(e)} className="invite_btn_1">
                        Bekor qilish
                     </button>
                     <button onClick={(e) => handleOk(e)} className="invite_btn_2">
                        Tashkil qilish
                     </button>
                  </div>
               </form>
            </div>
         </Modal>
      </>
   );
};

export default ModalBtn;

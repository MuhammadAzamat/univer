import { Button, Table } from "antd";
import React, { useState } from "react";
import AdminData from "../components/search-card/adminData";
import Modal from "../components/InviteModal/ModalBtn";

const onSubmit = () => {
   console.log("ffffff");
};

const columns = [
   {
      title: "FULL NAME",
      dataIndex: "name",
   },
   {
      title: "PASSPORT NUMBER",
      dataIndex: "passport",
   },
   {
      title: "PHONE NUMBER",
      dataIndex: "tel",
   },
   {
      title: "TA’LIM YO’NALISHI",
      dataIndex: "faculty",
   },
   {
      title: "SANA",
      dataIndex: "date",
   },
   {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a onClick={onSubmit}>Ba’tafsil</a>,
   },
];
const data = [];

for (let i = 0; i < 46; i++) {
   data.push({
      key: i,
      name: `Edward King ${i}`,
      passport: `AA${i}89322${i}`,
      tel: `+99893 222 22 2${i}`,
      faculty: `${i % 2 === 0 ? "Stomatologiya" : "Bank ishi"}`,
      date: `1${i}.09.2022`,
   });
}

const Dashboard2 = () => {
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [loading, setLoading] = useState(false);
   const [isModal, setIsModal] = useState(false);

   const start = () => {
      setLoading(true);
      setIsModal(true);
   };
   const colback = (isTrue) => {
      setIsModal(isTrue);
      setLoading(isTrue);
   };

   const onSelectChange = (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
   };

   const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
   };
   const hasSelected = selectedRowKeys.length > 0;
   return (
      <div className="dashboard_container">
         <AdminData search={true} title={"Dashboard"} />
         <div className="admission_table">
            <div
               style={{
                  marginBottom: 16,
               }}
               className="admission_table-navbar"
            >
               <b>Qabul qilingan arizalar</b>
               <div>
                  <span
                     style={{
                        marginRight: 32,
                     }}
                  >
                     {hasSelected ? `${selectedRowKeys.length} ta ariza tanlandi` : ""}
                  </span>
                  <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                     Imtihonga taklif qilish
                  </Button>
               </div>
            </div>
            <Table className="admission_table-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
         </div>
         <Modal showModal={isModal} colback={colback} />
      </div>
   );
};

export default Dashboard2;

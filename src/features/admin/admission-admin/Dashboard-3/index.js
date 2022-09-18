import { Button, Table } from "antd";
import React, { useState } from "react";
import AdminData from "../components/card-exam/adminData";

const onSubmit = () => {
   console.log("ffffff");
};

const columns = [
   {
      title: "",
      dataIndex: "",
      width: 0,
   },
   {
      title: "ID NUMBER",
      dataIndex: "id",
   },
   {
      title: "FULL NAME",
      dataIndex: "name",
   },
   {
      title: "PASSPORT NUMBER",
      dataIndex: "passport",
   },
   {
      title: "TA’LIM YO’NALISHI",
      dataIndex: "faculty",
   },
   {
      title: "IMTIHON VAQTI",
      dataIndex: "date",
   },
   {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a onClick={onSubmit}>Present</a>,
   },
];
const data = [];

for (let i = 0; i < 46; i++) {
   data.push({
      key: i,
      name: `Edward King ${i}`,
      passport: `AA${i}89322${i}`,
      id: `54654${i}`,
      faculty: `${i % 2 === 0 ? "Stomatologiya" : "Bank ishi"}`,
      date: `1${i}.09.2022`,
   });
}

const Dashboard3 = () => {
   return (
      <div className="dashboard_container">
         <AdminData />
         <div className="admission_table">
            <div
               style={{
                  marginBottom: 16,
               }}
               className="admission_table-navbar"
            >
               <b>Imtihonga taklif qilingalar</b>
            </div>
            <Table className="admission_table-table" columns={columns} dataSource={data} />
         </div>
      </div>
   );
};

export default Dashboard3;

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
      render: (name) => {
         return (
            <>
               <img style={{ width: "30px", marginRight: 10, borderRadius: "50%" }} src={name.img} alt="avatar" />
               <span style={{ color: "#6B7280" }}>{name.name}</span>
            </>
         );
      },
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
      render: () => <a onClick={onSubmit}>Baholash</a>,
   },
];
const data = [];

for (let i = 0; i < 46; i++) {
   data.push({
      key: i,
      name: { name: `Edward King ${i}`, img: "/logo512.png" },
      passport: `AA${i}89322${i}`,
      id: `54654${i}`,
      faculty: `${i % 2 === 0 ? "Stomatologiya" : "Bank ishi"}`,
      date: `1${i}.09.2022`,
   });
}

const Dashboard4 = () => {
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
               <b>Imtihonga kelganlar</b>
            </div>
            <Table className="admission_table-table" columns={columns} dataSource={data} />
         </div>
      </div>
   );
};

export default Dashboard4;

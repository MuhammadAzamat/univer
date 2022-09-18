import { Button, Table } from "antd";
import React, { useState } from "react";
import AdminData from "../components/search-card/adminData";

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

const DashboardHome = () => {
   const [search, setSearch] = useState(false);

   return (
      <div className="dashboard_container">
         <AdminData search={search} title={"Qabul"} />
         <div className="admission_table">
            <div
               style={{
                  marginBottom: 16,
               }}
               className="admission_table-navbar"
            >
               <b>Barcha arizalar</b>
            </div>
            <Table className="admission_table-table" columns={columns} dataSource={data} />
         </div>
      </div>
   );
};

export default DashboardHome;

import { Card, Col, Row } from "antd";
import React from "react";
import { Input, Space, Select } from "antd";
import "./adminData.css";

const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);

const handleChange = (value) => {
   console.log(`selected ${value}`);
};

const AdminData = ({search, title}) => {
   return (
      <div className="site-card-wrapper">
         <h1>{title}</h1>
         <Row className="site-card-wrapper_card" gutter={24}>
            <Col span={6}>
               <Card className="card" title="Registratsiya qilganlar" bordered={false}>
                  <span className="card-content">15/2000</span>
               </Card>
            </Col>
            <Col span={6}>
               <Card className="card" title="Barcha arizalar" bordered={false}>
                  <span className="card-content">25/1985</span>
               </Card>
            </Col>
            <Col span={6}>
               <Card className="card" title="Qabul qilingan arizalar" bordered={false}>
                  <span className="card-content">1963</span>
               </Card>
            </Col>
            <Col span={6}>
               <Card className="card" title="Qaytarganlar" bordered={false}>
                  <span className="card-content">22</span>
               </Card>
            </Col>
         </Row>
         {search === true ? (
            <div className="dashboard-search">
               <div className="dashboard-search-main">
                  <Space direction="vertical">
                     <Search
                        placeholder="Search by ID, Name, Passport number"
                        allowClear
                        onSearch={onSearch}
                        style={{
                           width: 400,
                        }}
                     />
                  </Space>
               </div>
               <div>
                  <Select
                     className="site-card-wrapper_select"
                     defaultValue="Ta'lim yonalishi boyicha filterlash"
                     style={{
                        width: 340,
                     }}
                     onChange={handleChange}
                  >
                     <Option value="direction">Ta'lim yonalishi boyicha filterlash</Option>
                     <Option value="lucy">Lucy</Option>
                     <Option value="Yiminghe">yiminghe</Option>
                  </Select>
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default AdminData;

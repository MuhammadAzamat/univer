import { Card, Col, Row } from "antd";
import React from "react";
import { Input, Space, Select } from "antd";
import "./adminData.css";
import "antd/dist/antd.css";

const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);

const handleChange = (value) => {
   console.log(`selected ${value}`);
};

const data = {
   invited_people: 2000,
   visited_people: 1985,
   total_scores: 1963,
};

const AdminData = () => {
   return (
      <div className="site-card-wrapper">
         <h1>Dashboard</h1>
         <Row className="site-card-wrapper_card " gutter={24}>
            <Col span={8}>
               <Card className="card" title="Imtihonga taklif qilinganlar" bordered={false}>
                  <span className="card-content">{data.invited_people}</span>
               </Card>
            </Col>
            <Col span={8}>
               <Card className="card" title="Imtihonga kelganlar" bordered={false}>
                  <span className="card-content">{data.visited_people}</span>
               </Card>
            </Col>
            <Col span={8}>
               <Card className="card" title="Imtihon ballari" bordered={false}>
                  <span className="card-content">{data.total_scores}</span>
               </Card>
            </Col>
         </Row>
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
                  size="large"
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
      </div>
   );
};

export default AdminData;

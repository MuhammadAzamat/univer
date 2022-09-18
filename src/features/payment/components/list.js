import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Table, Typography, Avatar, Modal } from "antd";
const { Title } = Typography;

const PaymentList = ({ showModal, ...props }) => {
  const columns = [
    {
      key: "1",
      width: "10%",
      title: "ID number",
      render: (record, index) => (
        <span className="number">
          {record.numberID !== null ? record.numberID : "-"}
        </span>
      ),
    },
    {
      key: "2",
      title: "Full name",
      render: (record, index) => {
        return (
          <div className="fullNameWrap">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="fullName">
              {record.fullName !== null ? record.fullName : "-"}
            </span>
          </div>
        );
      },
    },
    {
      key: "3",
      title: "Passport number",
      render: (record, index) =>
        record.passportNumber !== null ? record.passportNumber : "-",
    },
    {
      key: "4",
      title: "Direction of education",
      render: (record, index) =>
        record.direction !== null ? record.direction : "-",
    },
    {
      key: "5",
      title: "Examination result",
      render: (record, index) =>
        record.result !== null ? record.result + " ball" : "-",
    },
    {
      key: "6",
      // fixed: "right",
      width: "7%",
      render: (record, index) => (
        <button onClick={showModal} type="button" className="payment">
          To'lov
        </button>
      ),
    },
  ];
  return (
    <>
      <Title level={3}>Shartnoma olganlar</Title>
      <Table
        {...props}
        columns={columns}
        scroll={{ y: "calc(100vh - 170px)" }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </>
  );
};

export default PaymentList;

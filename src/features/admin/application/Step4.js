import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import { Col, Row } from "antd";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
// const xs = () => ({
//   span: 6,
//   offset: 1,
// });
// const lg = () => ({
//   span: 6,
//   offset: 1,
// });
const Step4 = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="step4_container">
      <Form name="validate_other" onFinish={onFinish}>
        <h3>Ta’lim yo’nalishi</h3>
        <Row gutter={[24, 16]}>
          {/*Ta’lim yo’nalishi  */}
          <Col span={8}>
            <label htmlFor="talimYonalishi">Ta’lim yo’nalishi</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                { required: true, message: "Ta’lim yo’nalishi tanlang!" },
                { type: "string", min: 6 },
              ]}
            >
              <Select
                id="talimYonalishi"
                style={{ width: "100%" }}
                placeholder="Ta’lim yo’nalishini tanlang"
                allowClear
                onChange={handleChange}
              >
                <Option value="Yonalish1">Yonalish1</Option>
                <Option value="Yonalish2">Yonalish2</Option>
              </Select>
            </Form.Item>
          </Col>
          {/*Ta’lim turi  */}
          <Col span={8}>
            <label htmlFor="talimTuri">Ta’lim turi</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                { required: true, message: "Ta’lim turini tanlang!" },
                { type: "string", min: 6 },
              ]}
            >
              <Select
                id="talimTuri"
                style={{ width: "100%" }}
                placeholder="Ta’lim turini tanlang"
                allowClear
                onChange={handleChange}
              >
                <Option value="TalimTuri1">TalimTuri1</Option>
                <Option value="TalimTuri2">TalimTuri2</Option>
              </Select>
            </Form.Item>
          </Col>
          {/*Ta’lim tili  */}
          <Col span={8}>
            <label htmlFor="talimTili">Ta’lim tili</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                { required: true, message: "Ta’lim tilini tanlang!" },
                { type: "string", min: 6 },
              ]}
            >
              <Select
                id="talimTili"
                style={{ width: "100%" }}
                placeholder="Ta’lim tilini tanlang"
                allowClear
                onChange={handleChange}
              >
                <Option value="TalimTili1">TalimTili1</Option>
                <Option value="TalimTili2">TalimTili2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <div className="prev-next-btns">
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button className="step4_btns">Orqaga</Button>
            <Button className="step4_btns" type="primary" htmlType="submit">
              Oldinga
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Step4;

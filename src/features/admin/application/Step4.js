import { Button, Form, Select } from "antd";
import React from "react";
import { Col, Row } from "antd";
import { faculties } from "../../../axios/data";

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
const Step4 = ({ onBackward, form }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const rules = [
    {
      required: false,
      message: "Maydonni to'ldiring!",
    },
  ];

  return (
    <div className="step4_container">
      <h3>Ta’lim yo’nalishi</h3>
      <Row gutter={[24, 16]}>
        {/*Ta’lim yo’nalishi  */}
        <Col span={8}>
          <label htmlFor="direction">Ta’lim yo’nalishi</label>
          <Form.Item style={{ margin: "5px 0" }} rules={rules} name="direction">
            <Select
              size="large"
              style={{ width: "100%" }}
              placeholder="Ta’lim yo’nalishini tanlang"
              allowClear
              onChange={handleChange}
            >
              {faculties.map((item, key) => {
                return (
                  <Option key={key} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        {/*Ta’lim turi  */}
        <Col span={8}>
          <label htmlFor="education_type">Ta’lim turi</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={rules}
            name="education_type"
          >
            <Select
              allowClear
              size="large"
              onChange={handleChange}
              style={{ width: "100%" }}
              placeholder="Ta’lim turini tanlang"
            >
              <Option value="sirtqi">Sirtqi</Option>
              <Option value="kunduzgi">Kunduzgi</Option>
              <Option value="kechki">Kechki</Option>
            </Select>
          </Form.Item>
        </Col>
        {/*Ta’lim tili  */}
        <Col span={8}>
          <label htmlFor="education_language">Ta’lim tili</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={rules}
            name="education_language"
          >
            <Select
              size="large"
              style={{ width: "100%" }}
              placeholder="Ta’lim tilini tanlang"
              allowClear
              onChange={handleChange}
            >
              <Option value="uz">O'zbek</Option>
              <Option value="ru">Rus</Option>
              <Option value="en">Ingliz</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <div className="nav-btns">
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 8,
          }}
        >
          <Button type="default" onClick={onBackward}>
            Bekor qilish
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 8,
          }}
        >
          <Button type="primary" onClick={() => form.submit()}>
            Oldinga
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Step4;

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
const Step4 = ({ onBackward }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const rules = [
    {
      required: true,
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
          <Form.Item rules={rules} style={{ margin: "5px 0" }} name="direction">
            <Select
              id="direction"
              style={{ width: "100%" }}
              placeholder="Ta’lim yo’nalishini tanlang"
              allowClear
              onChange={handleChange}
            >
              <Option value="Filologiya va tillarni o‘qitish">
                Filologiya va tillarni o‘qitish
              </Option>
              <Option value="Boshlang‘ich ta’lim">Boshlang‘ich ta’lim</Option>
              <Option value="Psixologiya">Psixologiya</Option>
              <Option value="Iqtisodiyot">Iqtisodiyot</Option>
              <Option value="Moliya va moliyaviy texnologiyalar">
                Moliya va moliyaviy texnologiyalar
              </Option>
              <Option value="Kompyuter ilmlari va dasturlash texnologiyalari">
                Kompyuter ilmlari va dasturlash texnologiyalari
              </Option>
              <Option value="Buxgalteriya hisobi va audit">
                Buxgalteriya hisobi va audit
              </Option>
              <Option value="Maktabgacha ta’lim">Maktabgacha ta’lim</Option>
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
              id="education_type"
              style={{ width: "100%" }}
              placeholder="Ta’lim turini tanlang"
              allowClear
              onChange={handleChange}
            >
              <Option value="Sirtqi">Sirtqi</Option>
              <Option value="Kunduzgi">Kunduzgi</Option>
              <Option value="Kechgi">Kechgi</Option>
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
              id="education_language"
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
      <br />
      <Row>
        <Col span={14}></Col>
        <Col span={10}>
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
              <Button type="primary" htmlType="submit">
                Oldinga
              </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Step4;

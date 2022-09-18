import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Uploader from "../Uploader";

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
const Step2 = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="step2_container">
      <Form name="validate_other" onFinish={onFinish}>
        <h3>Pasport ma'lumotlari</h3>
        <Row gutter={[24, 16]}>
          {/*Passport turi  */}
          <Col span={8}>
            <label htmlFor="passportID">Passport turi</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              name="passport"
              rules={[
                { required: true, message: "Pasport turini tanlang!" },
                { type: "string", min: 6 },
              ]}
            >
              <Select
                id="passportId"
                style={{ width: "100%" }}
                placeholder="ID Card"
                allowClear
                onChange={handleChange}
              >
                <Option value="ID">ID</Option>
                <Option value="Pasport">Pasport</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Passport seria  */}
          <Col span={8}>
            <label htmlFor="passportSeria">Pasport seria raqami</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                {
                  required: true,
                  message: "Pasport seria raqamini kiriting !",
                },
              ]}
            >
              <Input
                id="passportSeria"
                style={{ width: "100%" }}
                placeholder="AA3214323"
              />
            </Form.Item>
          </Col>
          {/* Identification raqam  */}
          <Col span={8}>
            <label htmlFor="identification">Identifikatsiya raqami</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                {
                  required: true,
                  message: "Identifikatsiya raqamini kiriting !",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                id="identification"
                placeholder="1234567890123"
              />
            </Form.Item>
          </Col>

          {/* Berilgan vaqti */}
          <Col span={8}>
            <label htmlFor="date1">Berilgan vaqti</label>
            <Form.Item>
              <DatePicker
                id="date1"
                style={{ margin: "5px 0", width: "100%" }}
                placeholder="kk/oo/yyyy"
              />
            </Form.Item>
          </Col>
          {/* Amal qilish muddatai  */}
          <Col span={8}>
            <label htmlFor="date2">Amal qilish muddati</label>
            <Form.Item>
              <DatePicker
                id="date2"
                style={{ margin: "5px  0", width: "100%" }}
                placeholder="kk/oo/yyyy"
              />
            </Form.Item>
          </Col>
          {/* Kim tominidan berilgan  */}
          <Col span={8}>
            <label htmlFor="kimtomondan">Kim tomonidan berilgan</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                {
                  required: true,
                  message: "Kim tomonidan berilganini kiriting !",
                },
              ]}
            >
              <Input
                id="kimtomondan"
                style={{ width: "100%" }}
                placeholder="Kim tomonidan berilgani"
              />
            </Form.Item>
          </Col>
          {/* Tugilgan sana  */}
          <Col span={8}>
            <label htmlFor="tugilgansana">Tug’ilgan sana</label>
            <Form.Item>
              <DatePicker
                style={{ margin: "5px 0", width: "100%" }}
                id="tugilgansana"
                placeholder="kk/oo/yyyy"
              />
            </Form.Item>
          </Col>
          {/* Jinsni kiriting  */}
          <Col span={8}>
            <label htmlFor="jins">Jinsini kiriting</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[{ required: true, message: "Jinsni kiriting!" }]}
            >
              <Select
                id="jins"
                style={{ width: "100%" }}
                placeholder="Jinsi"
                allowClear
                onChange={handleChange}
              >
                <Option value="erkak">Erkak</Option>
                <Option value="ayol">Ayol</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Millat  */}
          <Col span={8}>
            <label htmlFor="millat">Millati</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[{ required: true, message: "Millatni kiriting!" }]}
            >
              <Select
                id="millat"
                placeholder="O'zbek"
                style={{ width: "100%" }}
                allowClear
                onChange={handleChange}
              >
                <Option value="uzbek">O'zbek</Option>
                <Option value="rus">Rus</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Mamlakat  */}
          <Col span={8}>
            <label htmlFor="mamlakat">Mamlakat</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[{ required: true, message: "Mamlakatni kiriting!" }]}
            >
              <Select
                id="mamlakat"
                placeholder="O'zbekiston"
                style={{ width: "100%" }}
                allowClear
                onChange={handleChange}
              >
                <Option value="uzbkistan">O'zbekiston</Option>
                <Option value="rossiya">Rossiya</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Viloyat */}
          <Col span={8}>
            <label htmlFor="viloyat">Viloyat</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[{ required: true, message: "Viloyatni kiriting!" }]}
            >
              <Select
                id="viloyat"
                placeholder="Toshkent"
                style={{ width: "100%" }}
                allowClear
                onChange={handleChange}
              >
                <Option value="viloyat1">Viloyat1</Option>
                <Option value="viloyat2">Viloyat2</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Tuman  */}
          <Col span={8}>
            <label htmlFor="tuman">Tuman</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[{ required: true, message: "Tumanni kiriting!" }]}
            >
              <Select
                id="tuman"
                style={{ width: "100%" }}
                placeholder="Chilonzor"
                allowClear
                onChange={handleChange}
              >
                <Option value="tuman1">Tuman1</Option>
                <Option value="tuman2">Tuman2</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* Manzil */}
          <Col span={8}>
            <label htmlFor="manzil">Manzil</label>
            <Form.Item
              style={{ margin: "5px 0" }}
              rules={[
                {
                  required: true,
                  message: "Manzilingizni kiriting !",
                },
              ]}
            >
              <Input
                id="manzil"
                style={{ width: "100%" }}
                placeholder="Manzilni kiriting"
              />
            </Form.Item>
          </Col>
        </Row>
        <h3 style={{ margin: "10px 0" }}>Passport yoki ID fotosurati</h3>
        <div className="pasport-image">
          <Form.Item name="image1">
            <ImageUploadFront />
          </Form.Item>

          <Form.Item name="image2">
            <ImageUploadBack />
          </Form.Item>
        </div>
        <div className="prev-next-btns">
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button className="step2_btns">Orqaga</Button>
            <Button className="step2_btns" type="primary" htmlType="submit">
              Oldinga
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Step2;
const ImageUploadFront = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        value={value}
        beforeUpload={(file) => false}
        uploadSide="Old qismini yuklang"
        onChange={(e) => {
          onChange({ ...value, image: e.file });
        }}
      />
    </div>
  );
};
const ImageUploadBack = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        value={value}
        beforeUpload={(file) => false}
        uploadSide="Orqa qismini yuklang"
        onChange={(e) => {
          onChange({ ...value, image: e.file });
        }}
      />
    </div>
  );
};

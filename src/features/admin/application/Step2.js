import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Uploader from "../Uploader";

const { Option } = Select;

/******
 * 
 * {
  "passport_type": true,
  "passport_series": "string",
  "identification_number": "string",
  "passport_issue_date": "2022-09-18T21:32:01.250Z",
  "passport_expire_date": "2022-09-18T21:32:01.250Z",
  "issued_by": "string",
  "birth_date": "2022-09-18T21:32:01.250Z",
  "gender": 0,
  "nation": "string",
  "country": "string",
  "region": "string",
  "district": "string",
  "address": "string",
  "passport_file": "string"
}
 * 
 * ******/
const Step2 = ({ onBackward }) => {
  const [check, setCheck] = useState(true);
  const checker = (value) => {
    handleChange(value);
    if (value === "uzbkistan") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
    <div className="step2_container">
      <h3>Pasport ma'lumotlari</h3>
      <Row gutter={[24, 16]}>
        {/*Passport turi  */}
        <Col span={8}>
          <label htmlFor="passport_type">Passport turi</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            name="passport_type"
            rules={rules}
          >
            <Select
              id="passport_type"
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
          <label htmlFor="passport_series">Pasport seria raqami</label>
          <Form.Item name="passport_series" style={{ margin: "5px 0" }}>
            <Input
              rules={[
                {
                  required: true,
                  type: "regexp",
                  pattern: new RegExp(/^[A-Za-z]{2}[0-9]{7}$/),
                  message: "Wrong format!",
                },
              ]}
              id="passport_series"
              style={{ width: "100%" }}
              placeholder="AA1234567"
            />
          </Form.Item>
        </Col>
        {/* Identification raqam  */}
        <Col span={8}>
          <label htmlFor="identification_number">Identifikatsiya raqami</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={rules}
            name="identification_number"
          >
            <Input
              type="number"
              style={{ width: "100%" }}
              id="identification_number"
              placeholder="1234567890123"
            />
          </Form.Item>
        </Col>

        {/* Berilgan vaqti */}
        <Col span={8}>
          <label htmlFor="passport_issue_date">Berilgan vaqti</label>
          <Form.Item rules={rules} name="passport_issue_date">
            <DatePicker
              id="passport_issue_date"
              style={{ margin: "5px 0", width: "100%" }}
              placeholder="kk/oo/yyyy"
            />
          </Form.Item>
        </Col>
        {/* Amal qilish muddatai  */}
        <Col span={8}>
          <label htmlFor="passport_expire_date">Amal qilish muddati</label>
          <Form.Item rules={rules} name="passport_expire_date">
            <DatePicker
              id="passport_expire_date"
              style={{ margin: "5px  0", width: "100%" }}
              placeholder="kk/oo/yyyy"
            />
          </Form.Item>
        </Col>
        {/* Kim tominidan berilgan  */}
        <Col span={8}>
          <label htmlFor="issued_by">Kim tomonidan berilgan</label>
          <Form.Item style={{ margin: "5px 0" }} name="issued_by" rules={rules}>
            <Input
              id="issued_by"
              style={{ width: "100%" }}
              placeholder="Kim tomonidan berilgani"
            />
          </Form.Item>
        </Col>
        {/* Tugilgan sana  */}
        <Col span={8}>
          <label htmlFor="birth_date">Tug’ilgan sana</label>
          <Form.Item name="birth_date" rules={rules}>
            <DatePicker
              style={{ margin: "5px 0", width: "100%" }}
              id="birth_date"
              placeholder="kk/oo/yyyy"
            />
          </Form.Item>
        </Col>
        {/* Jinsni kiriting  */}
        <Col span={8}>
          <label htmlFor="gender">Jinsini kiriting</label>
          <Form.Item style={{ margin: "5px 0" }} rules={rules} name="gender">
            <Select
              id="gender"
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
          <label htmlFor="nation">Millati</label>
          <Form.Item style={{ margin: "5px 0" }} rules={rules} name="nation">
            <Select
              id="nation"
              placeholder="O'zbek"
              style={{ width: "100%" }}
              allowClear
              onChange={handleChange}
            >
              <Option value="uzbek">O'zbek</Option>
              <Option value="rus">Rus</Option>
              <Option value="qozoq">Qozoq</Option>
              <Option value="tojik">Tojik</Option>
              <Option value="qirgiz">Qirg'iz</Option>
              <Option value="uygur">Uyg'ur</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Mamlakat  */}
        <Col span={8}>
          <label htmlFor="country">Mamlakat</label>
          <Form.Item name="country" style={{ margin: "5px 0" }} rules={rules}>
            <Select
              id="country"
              placeholder="Davlat"
              style={{ width: "100%" }}
              allowClear
              onChange={checker}
            >
              <Option value="uzbkistan">O'zbekiston</Option>
              <Option value="rossiya">Rossiya</Option>
              <Option value="tojikiston">Tojikiston</Option>
              <Option value="qozogiston">Qozog'iston</Option>
              <Option value="qirgiziston">Qirg'iziston</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Viloyat */}
        <Col span={8}>
          <label htmlFor="region">Viloyat</label>
          <Form.Item name="region" style={{ margin: "5px 0" }} rules={rules}>
            <Select
              disabled={check}
              id="region"
              placeholder="Shahar/Viloyat"
              style={{ width: "100%" }}
              allowClear
              onChange={handleChange}
            >
              <Option value="Andijon">Andijon viloyati</Option>
              <Option value="Buxoro">Buxoro viloyati</Option>
              <Option value="Jizzax">Jizzax viloyati</Option>
              <Option value="Qashqadaryo">Qashqadaryo viloyati</Option>
              <Option value="Navoiy">Navoiy viloyati</Option>
              <Option value="Namangan">Namangan viloyati</Option>
              <Option value="Samarqand">Samarqand viloyati</Option>
              <Option value="Surxondaryo">Surxondaryo viloyati</Option>
              <Option value="Sirdaryo">Sirdaryo viloyati</Option>
              <Option value="Xorazm">Xorazm viloyati</Option>
              <Option value="Farg'ona">Farg'ona viloyati</Option>
              <Option value="Toshkent viloyati">Toshkent viloyati</Option>
              <Option value="Toshkent shahri">Toshkent shahri</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Tuman  */}
        <Col span={8}>
          <label htmlFor="district">Tuman</label>
          <Form.Item name="district" style={{ margin: "5px 0" }} rules={rules}>
            <Input placeholder="Tuman" />
          </Form.Item>
        </Col>
        {/* Manzil */}
        <Col span={8}>
          <label htmlFor="address">Manzil</label>
          <Form.Item name="address" style={{ margin: "5px 0" }} rules={rules}>
            <Input
              id="address"
              style={{ width: "100%" }}
              placeholder="Manzilni kiriting"
            />
          </Form.Item>
        </Col>
      </Row>
      <h3 style={{ margin: "10px 0" }}>Passport yoki ID fotosurati</h3>
      <div className="pasport-image">
        <Form.Item name="passport_file">
          <ImageUploadFront />
        </Form.Item>

        <Form.Item name="image2">
          <ImageUploadBack />
        </Form.Item>
      </div>
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
                Orqaga
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

export default Step2;
const ImageUploadFront = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        showUploadList={false}
        title={"Old qismini yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
    </div>
  );
};
const ImageUploadBack = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        showUploadList={true}
        title={"Orqa qismini yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
    </div>
  );
};

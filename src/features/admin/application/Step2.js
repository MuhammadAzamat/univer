import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import { Col, Row } from "antd";
import Uploader from "../Uploader";
import { countries, districts, regions } from "../../../axios/data";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Step2 = ({ onBackward, form }) => {
  const countryValue = Form.useWatch("country", form);
  const regionValue = Form.useWatch("region", form);

  const rules = [
    {
      // required: true,
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
          <Form.Item
            name="passport_series"
            style={{ margin: "5px 0" }}
            rules={rules}
          >
            <Input
              id="passport_series"
              style={{ width: "100%" }}
              placeholder="AA"
            />
          </Form.Item>
        </Col>
        {/* Identification raqam  */}
        <Col span={8}>
          <label htmlFor="identification_number">Identifikatsiya raqami</label>
          <Form.Item rules={rules} name="identification_number">
            <InputNumber
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
          <label htmlFor="gender">Jinsi</label>
          <Form.Item rules={rules} name="gender">
            <Select
              id="gender"
              allowClear
              onChange={handleChange}
              style={{ width: "100%" }}
              placeholder="Jinsini tanlang"
            >
              <Option value="erkak">Erkak</Option>
              <Option value="ayol">Ayol</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="nation">Millati</label>
          <Form.Item rules={rules} name="nation">
            <Select
              id="nation"
              placeholder="O'zbek"
              style={{ width: "100%" }}
              allowClear
              onChange={handleChange}
            >
              <Option value="uzbek">O'zbek</Option>
              <Option value="tojik">Tojik</Option>
              <Option value="uygur">Uyg'ur</Option>
              <Option value="rus">Rus</Option>
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
              onChange={handleChange}
            >
              {countries.map((item, key) => {
                return <Option value={item.id}>{item.name}</Option>;
              })}
            </Select>
          </Form.Item>
        </Col>
        {/* Viloyat */}
        <Col span={8}>
          <label htmlFor="region">Viloyat</label>
          <Form.Item name="region" style={{ margin: "5px 0" }} rules={rules}>
            <Select
              id="region"
              placeholder="Shahar/Viloyat"
              style={{ width: "100%" }}
              allowClear
              onChange={handleChange}
            >
              {regions
                .filter((item) => item.country_id == countryValue)
                .map((item, key) => {
                  return <Option value={item.id}>{item.name_uz}</Option>;
                })}
            </Select>
          </Form.Item>
        </Col>
        {/* Tuman  */}
        <Col span={8}>
          <label htmlFor="district">Tuman</label>
          <Form.Item name="district" style={{ margin: "5px 0" }} rules={rules}>
            <Select
              id="district"
              style={{ width: "100%" }}
              placeholder="Tuman"
              allowClear
              onChange={handleChange}
            >
              {districts
                .filter((item) => item.region_id == regionValue)
                .map((item, key) => {
                  return <Option value={item.id}>{item.name_uz}</Option>;
                })}
            </Select>
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
              <Button type="primary" onClick={() => form.submit()}>
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
        showUploadList={false}
        title={"Orqa qismini yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
    </div>
  );
};

import {
  Button,
  Form,
  Select,
  Col,
  Row,
  Input,
  DatePicker,
  InputNumber,
} from "antd";
import React from "react";
import Uploader from "../Uploader";
import { countries, districts, regions } from "../../../axios/data";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Step2 = ({ onBackward, form }) => {
  const countryValue = Form.useWatch("country", form);
  const regionValue = Form.useWatch("region", form);

  const rules = null;
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };
  return (
    <div className="step2_container">
      <h3>Pasport ma'lumotlari</h3>
      <Row gutter={[24, 16]}>
        {/*Passport turi  */}
        <Col span={8}>
          <Form.Item
            rules={rules}
            {...formItemLayout}
            name="passport_type"
            label="Passport turi"
          >
            <Select
              id="passport_type"
              style={{ width: "100%" }}
              placeholder="ID Card"
              allowClear
              size="large"
              onChange={handleChange}
            >
              <Option value={true}>ID</Option>
              <Option value={false}>Pasport</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={[
              {
                required: true,
                pattern: /^[A-Z]{2}[0-9]{7}$/,
                message: "Passport seria va raqamini tekshiring",
              },
            ]}
            {...formItemLayout}
            name="passport_series"
            label="Pasport seria raqami"
          >
            <Input
              size="large"
              id="passport_series"
              style={{ width: "100%" }}
              placeholder="AA1215456"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={[
              {
                min: 14,
                max: 14,
                type: "string",
                required: true,
                pattern: /^[0-9]{14}$/,
                message: "Maydon 14 ta sondan iborat bo'lishi kerak",
              },
            ]}
            {...formItemLayout}
            name="identification_number"
            label="Identifikatsiya raqami"
          >
            <Input
              size="large"
              style={{ width: "100%" }}
              id="identification_number"
              placeholder="1234567890123"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            {...formItemLayout}
            label="Berilgan vaqti"
            name="passport_issue_date"
          >
            <DatePicker
              size="large"
              id="passport_issue_date"
              style={{ width: "100%" }}
              placeholder="kk/oo/yyyy"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            {...formItemLayout}
            label="Amal qilish muddati"
            name="passport_expire_date"
          >
            <DatePicker
              size="large"
              id="passport_expire_date"
              placeholder="kk/oo/yyyy"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            name="issued_by"
            {...formItemLayout}
            label="Kim tomonidan berilgan"
          >
            <Input
              size="large"
              style={{ width: "100%" }}
              placeholder="Kim tomonidan berilgani"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Majburiy maydon",
              },
            ]}
            name="birth_date"
            {...formItemLayout}
            label="Tug’ilgan sana"
          >
            <DatePicker
              size="large"
              placeholder="kk/oo/yyyy"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Jinsi"
            rules={rules}
            name="gender"
            {...formItemLayout}
          >
            <Select
              allowClear
              size="large"
              onChange={handleChange}
              style={{ width: "100%" }}
              placeholder="Jinsini tanlang"
            >
              <Option value={0}>Erkak</Option>
              <Option value={1}>Ayol</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            name="nation"
            label="Millati"
            {...formItemLayout}
          >
            <Select
              allowClear
              size="large"
              {...formItemLayout}
              placeholder="O'zbek"
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <Option value="uzbek">O'zbek</Option>
              <Option value="tojik">Tojik</Option>
              <Option value="uygur">Uyg'ur</Option>
              <Option value="rus">Rus</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="country"
            rules={rules}
            label="Mamlakat"
            {...formItemLayout}
          >
            <Select
              allowClear
              size="large"
              placeholder="Davlat"
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              {countries.map((item, key) => (
                <Option key={key} value={String(item.id)}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="region"
            rules={rules}
            label="Viloyat"
            {...formItemLayout}
          >
            <Select
              allowClear
              size="large"
              onChange={handleChange}
              style={{ width: "100%" }}
              placeholder="Shahar/Viloyat"
            >
              {regions
                .filter((item) => item.country_id == countryValue)
                .map((item, key) => {
                  return (
                    <Option key={key} value={String(item.id)}>
                      {item.name_uz}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Tuman"
            rules={rules}
            name="district"
            {...formItemLayout}
          >
            <Select
              allowClear
              size="large"
              placeholder="Tuman"
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              {districts
                .filter((item) => item.region_id == regionValue)
                .map((item, key) => (
                  <Option key={key} value={String(item.id)}>
                    {item.name_uz}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            name="address"
            label="Manzil"
            {...formItemLayout}
          >
            <Input
              size="large"
              style={{ width: "100%" }}
              placeholder="Manzilni kiriting"
            />
          </Form.Item>
        </Col>
      </Row>
      <h3 style={{ margin: "10px 0" }}>Passport yoki ID fotosurati</h3>
      <div className="pasport-image">
        <Form.Item name="passport_file_1">
          <ImageUploadFront />
        </Form.Item>
        <Form.Item name="passport_file_2">
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

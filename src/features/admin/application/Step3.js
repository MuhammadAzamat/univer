import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import { Col, Row } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import ImgUploader from "./ImgUploader";
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
const Step3 = ({ onBackward }) => {
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
    <div className="step3_container">
      <Talim rules={rules} />
      <br />
      <Row gutter={[24, 16]}>
        <Col>
          <div className="add-education">
            <span>
              <PlusCircleOutlined style={{ color: "#377DFF" }} />
            </span>
            <p>Ta’lim muassasasini qo’shish</p>
          </div>
        </Col>
      </Row>
      <br />
      <Sertifikatlar rules={rules} />

      <br />
      <Row gutter={[24, 16]}>
        <Col>
          <div className="add-sertification">
            <span>
              <PlusCircleOutlined style={{ color: "#377DFF" }} />
            </span>
            <p>Sertifikat qo’shish</p>
          </div>
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

export default Step3;

const Talim = ({ rules }) => {
  return (
    <>
      <h3>Ta'lim</h3>
      <Row gutter={[24, 16]}>
        {/*Maktab turi  */}
        <Col span={8}>
          <label htmlFor="education_type">Ta'lim turi</label>
          <Form.Item
            name="education_type"
            style={{ margin: "5px 0" }}
            rules={rules}
          >
            <Select
              id="education_type"
              style={{ width: "100%" }}
              placeholder="Ta'lim turini tanlang!"
              allowClear
            >
              <Option value="Maktab">Maktab</Option>
              <Option value="Litsey">Litsey</Option>
              <Option value="Kollej">Kollej</Option>
              <Option value="Texnikum">Texnikum</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Muassasa  */}
        <Col span={8}>
          <label htmlFor="education_name">Muassasa</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={rules}
            name="education_name"
          >
            <Input
              id="education_name"
              style={{ width: "100%" }}
              placeholder="Maktabingizni kiriting"
            />
          </Form.Item>
        </Col>
        {/* Minus button  */}
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
          span={8}
        >
          <div className="minus-btn">
            <MinusCircleOutlined style={{ color: "#B0B7C3" }} />
          </div>
        </Col>
        {/* Diplom raqam  */}
        <Col span={8}>
          <label htmlFor="diploma_number">Diplom/Attestatsiya raqami</label>
          <Form.Item
            name="diploma_number"
            style={{ margin: "5px 0" }}
            rules={rules}
          >
            <Input
              style={{ width: "100%" }}
              id="diploma_number"
              placeholder="Diplom/attestatsiya raqamini kiriting"
            />
          </Form.Item>
        </Col>

        {/* Tugatgan vaqti */}
        <Col span={8}>
          <label htmlFor="graduation_year">Tugatgan yil</label>
          <Form.Item rules={rules} name="graduation_year">
            <DatePicker
              id="graduation_year"
              style={{ margin: "5px 0", width: "100%" }}
              placeholder="kk/oo/yyyy"
            />
          </Form.Item>
        </Col>
        {/*Diplom nusxasi  */}
        <Col span={24}>
          <h3>Diplom/Attestat nusxasi</h3>
        </Col>
        <Col span={24}>
          <Form.Item rules={rules} name="diploma_file">
            <DiplomUploader />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <hr />
    </>
  );
};

const Sertifikatlar = ({ rules }) => {
  return (
    <>
      <h3>Sertifikatlar</h3>
      <Row gutter={[24, 16]}>
        {/*Sertifikat turi  */}
        <Col span={8}>
          <label htmlFor="certificate_type">Sertifikat turi</label>
          <Form.Item name="certificate_type" style={{ margin: "5px 0" }}>
            <Select
              id="certificate_type"
              style={{ width: "100%" }}
              placeholder="Sertifikat turini tanlang!"
              allowClear
            >
              <Option value="IELTS">IELTS</Option>
              <Option value="TOEFL">TOEFL</Option>
              <Option value="SAT">SAT</Option>
              <Option value="DTM">DTM</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Sertifikat raqami  */}
        <Col span={8}>
          <label htmlFor="certificate_number">Sertifikat raqami</label>
          <Form.Item style={{ margin: "5px 0" }} name="certificate_number">
            <Input
              id="certificate_number"
              style={{ width: "100%" }}
              placeholder="Sertifikat raqami kiriting"
            />
          </Form.Item>
        </Col>
        {/* Minus button  */}
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
          span={8}
        >
          <div className="minus-btn">
            <MinusCircleOutlined style={{ color: "#B0B7C3" }} />
          </div>
        </Col>
        {/* To’plangan ball  */}
        <Col span={8}>
          <label htmlFor="certificate_score">To’plangan ball</label>
          <Form.Item style={{ margin: "5px 0" }} name="certificate_score">
            <InputNumber
              style={{ width: "100%" }}
              id="certificate_score"
              placeholder="To’plangan ball kiriting"
            />
          </Form.Item>
        </Col>

        {/*Sertifikatlar nusxasi  */}
        <Col span={24}>
          <h3>Sertifikatlar nusxasi</h3>
        </Col>
        <Col span={24}>
          <Form.Item style={{ margin: "5px 0" }} name="certificate_file">
            <CertUploader />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <hr />
    </>
  );
};

const DiplomUploader = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        showUploadList={true}
        title={"Diplom/Attestat yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
    </div>
  );
};

const CertUploader = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        showUploadList={true}
        title={"Sertifikatni yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
    </div>
  );
};

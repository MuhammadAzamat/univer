import { Button, Form, Select, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import { Col, Row } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import ImgUploader from "./ImgUploader";

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
const Step3 = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="step3_container">
      <Form name="validate_other" onFinish={onFinish}>
        <Talim />
        <br />
        <div style={{ width: "100%" }}>
          <div className="add-education">
            <span>
              <PlusCircleOutlined style={{ color: "#377DFF" }} />
            </span>
            <p>Ta’lim muassasasini qo’shish</p>
          </div>
        </div>
        <br />
        <Sertifikatlar />

        <br />
        <div style={{ width: "100%" }}>
          <div className="add-sertification">
            <span>
              <PlusCircleOutlined style={{ color: "#377DFF" }} />
            </span>
            <p>Sertifikat qo’shish</p>
          </div>
        </div>
        <br />
        <div className="prev-next-btns">
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button className="step3_btns">Orqaga</Button>
            <Button className="step3_btns" type="primary" htmlType="submit">
              Oldinga
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Step3;

const Talim = () => {
  return (
    <>
      <h3>Ta'lim</h3>
      <Row gutter={[24, 16]}>
        {/*Maktab turi  */}
        <Col span={8}>
          <label htmlFor="talimturi">Ta'lim turi</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              { required: true, message: "Ta'lim turini" },
              { type: "string", min: 6 },
            ]}
          >
            <Select
              id="talimturi"
              style={{ width: "100%" }}
              placeholder="Ta'lim turini tanlang!"
              allowClear
              onChange={handleChange}
            >
              <Option value="Kundizgi">Kundizgi</Option>
              <Option value="Kechki">Kechki</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Muassasa  */}
        <Col span={8}>
          <label htmlFor="muassasa">Muassasa</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              {
                required: true,
                message: "Maktabingizni kiriting !",
              },
            ]}
          >
            <Input
              id="muassasa"
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
          <label htmlFor="diplomraqami">Diplom/Attestatsiya raqami</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              {
                required: true,
                message: "Diplom/attestatsiya raqaminin kiriting !",
              },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              id="diplomraqami"
              placeholder="Diplom/attestatsiya raqamini kiriting"
            />
          </Form.Item>
        </Col>

        {/* Tugatgan vaqti */}
        <Col span={8}>
          <label htmlFor="tugatganyil">Tugatgan yil</label>
          <Form.Item>
            <DatePicker
              id="tugatganyil"
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
          <ImgUploader />
        </Col>
      </Row>
      <br />
      <hr />
    </>
  );
};

const Sertifikatlar = () => {
  return (
    <>
      <h3>Sertifikatlar</h3>
      <Row gutter={[24, 16]}>
        {/*Sertifikat turi  */}
        <Col span={8}>
          <label htmlFor="sertifikatTuri">Sertifikat turi</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              { required: true, message: "Sertifikat turini tanlang !" },
              { type: "string", min: 6 },
            ]}
          >
            <Select
              id="sertifikatTuri"
              style={{ width: "100%" }}
              placeholder="Sertifikat turini tanlang!"
              allowClear
              onChange={handleChange}
            >
              <Option value="Sertifikat1">Sertifikat1</Option>
              <Option value="Sertifikat2">Sertifika2</Option>
            </Select>
          </Form.Item>
        </Col>
        {/* Sertifikat raqami  */}
        <Col span={8}>
          <label htmlFor="sertifikatRaqam">Sertifikat raqami</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              {
                required: true,
                message: "Sertifikat raqami kiriting !",
              },
            ]}
          >
            <Input
              id="sertifikatRaqam"
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
          <label htmlFor="toplaganBall">To’plangan ball</label>
          <Form.Item
            style={{ margin: "5px 0" }}
            rules={[
              {
                required: true,
                message: "To’plangan ball kiriting !",
              },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              id="toplaganBall"
              placeholder="To’plangan ball kiriting"
            />
          </Form.Item>
        </Col>

        {/*Sertifikatlar nusxasi  */}
        <Col span={24}>
          <h3>Sertifikatlar nusxasi</h3>
        </Col>
        <Col span={24}>
          <ImgUploader />
        </Col>
      </Row>
      <br />
      <hr />
    </>
  );
};

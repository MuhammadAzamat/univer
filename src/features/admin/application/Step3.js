import {
  Button,
  Form,
  Select,
  Input,
  DatePicker,
  InputNumber,
  Space,
} from "antd";
import React from "react";
import { Col, Row } from "antd";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ImgUploader from "./ImgUploader";
import Uploader from "../Uploader";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 24,
  },
};
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
const Step3 = ({ onBackward, form }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const rules = [
    {
      // required: true,
      message: "Maydonni to'ldiring!",
    },
  ];

  return (
    <div className="step3_container">
      <Talim rules={rules} />
      {/* <AddEducation /> */}
      <br />
      <Sertifikatlar rules={rules} />
      {/* <AddSertificate /> */}
      <br />
      <Row>
        <Col xs={24} sm={24} md={14} lg={14}></Col>
        <Col xs={24} sm={24} md={10} lg={10}>
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

export default Step3;

const Talim = (
  {
    /* rules */
  }
) => {
  const rules = null;
  return (
    <>
      <h3>Ta'lim</h3>
      <Form.List name="edus">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row key={key} gutter={[24, 16]}>
                {/*Maktab turi  */}
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    label="Tamomlagan muassasangiz"
                    {...formItemLayout}
                    name={[name, "education_type"]}
                  >
                    <Select
                      allowClear
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Tamomlagan muassasangizni tanlang"
                    >
                      <Option value="Maktab">Maktab</Option>
                      <Option value="Litsey">Litsey</Option>
                      <Option value="Kollej">Kollej</Option>
                      <Option value="Texnikum">Texnikum</Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* Muassasa  */}
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    label="Muassasa"
                    {...formItemLayout}
                    name={[name, "education_name"]}
                  >
                    <Input
                      size="large"
                      id="education_name"
                      style={{ width: "100%" }}
                      placeholder="Muassasa nomini kiriting"
                    />
                  </Form.Item>
                </Col>
                {/* Minus button  */}
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  {/* <div className="minus-btn">
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: "#B0B7C3" }}
                    />
                  </div> */}
                </Col>
                {/* Diplom raqam  */}
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    {...formItemLayout}
                    name={[name, "diploma_number"]}
                    label="Diplom/Attestatsiya raqami"
                  >
                    <Input
                      size="large"
                      id="diploma_number"
                      style={{ width: "100%" }}
                      placeholder="Diplom/attestatsiya raqamini kiriting"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    {...formItemLayout}
                    label="Tugatgan yil"
                    name={[name, "graduation_year"]}
                  >
                    <DatePicker
                      size="large"
                      format="DD.MM.YYYY"
                      placeholder="DD.MM.YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                {/*Diplom nusxasi  */}
                {/* <Col span={24}>
                  <h3>Diplom/Attestat nusxasi</h3>
                </Col>
                <Col span={24}>
                  <Form.Item rules={rules} name={[name, "diploma_file"]}>
                    <DiplomUploader />
                  </Form.Item>
                </Col> */}
              </Row>
            ))}
            <br />

            <hr />
            <Row gutter={[24, 16]}>
              <Col>
                <div className="add-education" onClick={() => add()}>
                  <PlusCircleOutlined style={{ color: "#377DFF" }} />
                  <p>Ta’lim muassasasini qo’shish</p>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
      <br />
    </>
  );
};

const Sertifikatlar = (
  {
    /* rules */
  }
) => {
  const rules = null;
  return (
    <>
      <h3>Sertifikatlar</h3>
      <Form.List name="certs">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row key={key} gutter={[24, 16]}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    {...formItemLayout}
                    label="Sertifikat turi"
                    name={[name, "certificate_type"]}
                  >
                    <Select
                      allowClear
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Sertifikat turini tanlang!"
                    >
                      {["IELTS", "CEFR", "TOEFL", "DTM"].map((item, key) => (
                        <Option value={item} key={key}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                {/* Sertifikat raqami  */}
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    {...formItemLayout}
                    label="Sertifikat raqami"
                    name={[name, "certificate_number"]}
                  >
                    <Input
                      size="large"
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
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                >
                  {/* <div className="minus-btn">
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: "#B0B7C3" }}
                    />
                  </div> */}
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    rules={rules}
                    {...formItemLayout}
                    label="To’plangan ball"
                    name={[name, "certificate_score"]}
                  >
                    <InputNumber
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="To’plangan ball kiriting"
                    />
                  </Form.Item>
                </Col>

                {/*Sertifikatlar nusxasi  */}
                <Col span={24}>
                  <h3>Sertifikatlar nusxasi</h3>
                </Col>
                <Col span={24}>
                  <Form.Item
                    style={{ margin: "5px 0" }}
                    rules={rules}
                    name={[name, "certificate_file"]}
                  >
                    <CertUploader />
                  </Form.Item>
                </Col>
              </Row>
            ))}
            <br />
            <hr />
            <Row gutter={[24, 16]}>
              <Col>
                <div className="add-sertification" onClick={() => add()}>
                  <PlusCircleOutlined style={{ color: "#377DFF" }} />
                  <p>Sertifikat qo’shish</p>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
      <br />
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

const AddEducation = ({ rules }) => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Talim rules={rules} />
              </Space>
            ))}
            <Form.Item style={{ width: "250px" }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Ta’lim muassasasini qo’shish
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};
const AddSertificate = ({ rules }) => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Sertifikatlar rules={rules} />
              </Space>
            ))}
            <Form.Item style={{ width: "250px" }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Sertifikat qo’shish
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

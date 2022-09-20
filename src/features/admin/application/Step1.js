import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
import { useState } from "react";
import StepNavbar from "../stepNavbar";
import Uploader from "../Uploader";

/***
 * {
  "personal_photo": "string",
  "first_name": "string",
  "last_name": "string",
  "middle_name": "string",
  "phone": "string",
  "extra_phone": "string",
  "email": "string",
  "is_disabled": true,
  "disabled_type": "string"
}
 * ***/

function Step1({ onBackward }) {
  const { Option } = Select;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const rules = [
    {
      required: true,
      message: "Iltimos maydonni to'ldiring",
    },
  ];

  const [is_disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!is_disabled);
    console.log("hello");
  };

  return (
    <div className="step-1-content">
      <h1 className="step-1-content-title">Umumiy ma’lumotlar</h1>
      <Form.Item name="image">
        <ImageUpload />
      </Form.Item>

      <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 24 }}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="first_name">Ismi</label>
          <Form.Item name="first_name" rules={rules}>
            <Input id="first_name" placeholder="Anvar" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="last_name">Familiyasi</label>
          <Form.Item name="last_name" rules={rules}>
            <Input id="last_name" placeholder="Anvarov" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="middle_name">Otasining ismi</label>
          <Form.Item name="middle_name" rules={rules}>
            <Input id="middle_name" placeholder="Anvar o’g’li" />
          </Form.Item>
        </Col>
      </Row>

      <h1 className="step-1-content-title">Kontakt ma’lumotlar</h1>
      <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="phone">Telefon raqami*</label>
          <Form.Item name="phone" rules={rules}>
            <Input type="tel" id="phone" placeholder="+998 90 123 45 67" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="extra_phone">Qo’shimcha telefon raqami</label>
          <Form.Item name="extra_phone" rules={rules}>
            <Input
              type="tel"
              id="extra_phone"
              placeholder="+998 90 123 45 67"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="email">Email</label>
          <Form.Item
            name="email"
            rules={[
              {
                required: false,
                message: "Iltimos maydonni to'ldiring",
              },
            ]}
          >
            <Input type="email" id="email" placeholder="example@mail.com" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="is_disabled" className="isDisabled-title">
            Imkoniyati cheklangan
          </label>
          <Form.Item name="is_disabled">
            <SwitchInput onChange={toggle} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <label htmlFor="disable_type">Imkoniyati cheklangan turi</label>
          <Form.Item name="disable_type">
            <Select
              disabled={is_disabled}
              placeholder="Ikkinchi guruh nogironi"
              className="select-before"
            >
              <Option value=""></Option>
              <Option value="Birinchi guruh nogironi">
                Birinchi guruh nogironi
              </Option>
              <Option value="Ikkinchi guruh nogironi">
                Ikkinchi guruh nogironi
              </Option>
              <Option value="Uchinchi guruh nogironi">
                Uchinchi guruh nogironi
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={14} lg={14}></Col>
        <Col xs={24} sm={24} md={8} lg={8}>
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
}

export default Step1;

const ImageUpload = ({ value = {}, onChange }) => {
  return (
    <div className="step-1-image-upload">
      <Uploader
        showUploadList={false}
        title={"Fotosuratni yuklang"}
        value={value}
        beforeUpload={(file) => false}
        onChange={(info) => onChange(info)}
      />
      <div className="step-1-image-upload-right">
        <h2>Fotasurat ni yuklang</h2>
        <h3>You can upload .JPEG, .JPG, or .PNG photes not over 1 MB.</h3>
        <Upload
          showUploadList={false}
          beforeUpload={(file) => false}
          onChange={(info) => onChange(info)}
        >
          <Button
            className="btn-upload"
            icon={
              <img
                alt="leftIcon"
                src={require("../../../assets/img/Icon-left.png")}
              />
            }
          >
            Upload photo
          </Button>
        </Upload>
      </div>
    </div>
  );
};

const SwitchInput = ({ value, onChange }) => (
  <div className="disabled-field">
    <label htmlFor="is_disabled">
      <h3>Imkoniyati cheklangan bo’lsa qaysi turda ekanligini ko’rsating</h3>
    </label>
    <Switch
      id="is_disabled"
      checked={value}
      onChange={(checked) => {
        onChange(checked);
      }}
    />
  </div>
);

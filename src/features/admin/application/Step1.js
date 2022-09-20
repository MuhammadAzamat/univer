/* eslint-disable jsx-a11y/alt-text */
import Uploader from "../Uploader";
import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
const { Option } = Select;

function Step1({ onBackward, form }) {
  const isDisabledValue = Form.useWatch("is_disabled", form);
  const rules = [
    {
      // required: true,
      message: "Iltimos maydonni to'ldiring",
    },
  ];
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  return (
    <div className="step-1-content">
      <h1 className="step-1-content-title">Umumiy ma’lumotlar</h1>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Rasmni yuklang",
          },
        ]}
        name="image"
      >
        <ImageUpload />
      </Form.Item>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <Form.Item
            label="Ism"
            rules={[
              {
                required: true,
                message: "Majburiy maydon",
              },
            ]}
            name="first_name"
            {...formItemLayout}
          >
            <Input size="large" placeholder="Ismni kiriting" id="first_name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="last_name"></label>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Majburiy maydon",
              },
            ]}
            name="last_name"
            label="Familiya"
            {...formItemLayout}
          >
            <Input
              size="large"
              id="last_name"
              placeholder="Familiyani kiriting"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Majburoy maydon",
              },
            ]}
            name="middle_name"
            {...formItemLayout}
            label="Otasining ismi"
          >
            <Input
              size="large"
              id="middle_name"
              placeholder="Otasining ismini kiriting"
            />
          </Form.Item>
        </Col>
      </Row>
      <h1 className="step-1-content-title">Kontakt ma’lumotlar</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <Form.Item
            name="phone"
            {...formItemLayout}
            label="Telefon raqami"
            rules={[{ required: true, message: "Telefon raqam majburiy" }]}
          >
            <Input size="large" allowClear placeholder="+998991201122" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={rules}
            name="extra_phone"
            {...formItemLayout}
            label="Qo’shimcha telefon raqami"
          >
            <Input
              allowClear
              size="large"
              id="extra_phone"
              placeholder="+998991201122"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="email"
            label="Email"
            {...formItemLayout}
            rules={[
              { type: "email", required: true, message: "Email haqiqiy emas!" },
            ]}
          >
            <Input
              id="email"
              size="large"
              type="email"
              placeholder="user@gmail.com"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <label htmlFor="is_disabled" className="isDisabled-title">
            Imkoniyati cheklangan
          </label>
          <Form.Item name="is_disabled">
            <SwitchInput />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="disable_type"
            {...formItemLayout}
            label="Imkoniyati cheklanganlik turi"
          >
            <Select
              size="large"
              placeholder="Tanlang..."
              className="select-before"
              disabled={!isDisabledValue}
            >
              <Option value=""></Option>
              <Option value="1">Birinchi guruh nogironi</Option>
              <Option value="2">Ikkinchi guruh nogironi</Option>
              <Option value="3">Uchinchi guruh nogironi</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
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
        </Col>
      </Row>
    </div>
  );
}

export default Step1;
const uploadAvatar = (image) => {
  const user = JSON.parse(localStorage.getItem("user"));
  var formdata = new FormData();
  formdata.append("tag", "avatar");
  formdata.append("files", image);
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return (
    fetch(`https://iiiu.spprt.uz/api/v1/${user.id}/medias`, requestOptions)
      // .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error))
  );
};
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
        <h2>Fotosuratni yuklang</h2>
        <p>
          Ushbu turdagi fayl turlarini yuklashingiz mumkin va fayl hajmi 1 mb
          .JPEG, .JPG, or .PNG
        </p>
        <Upload
          showUploadList={false}
          beforeUpload={(file) => false}
          onChange={(info) => onChange(info)}
        >
          <Button size="large" className="btn-upload">
            Fotosuratni yuklash
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

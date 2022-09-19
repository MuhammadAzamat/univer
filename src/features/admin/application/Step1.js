import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
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

function Step1({ onBackward, onForward, form }) {

  const isDisabledValue = Form.useWatch('is_disabled', form);

  const { Option } = Select;

  const rules = [
    {
      // required: true,
      message: 'Iltimos maydonni to\'ldiring',
    }
  ]

  return (
    <div className="step-1-content">
      <h1 className="step-1-content-title">Umumiy ma’lumotlar</h1>
      <Form.Item
        name="image">
        <ImageUpload />
      </Form.Item>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <label htmlFor="first_name">Ismi</label>
          <Form.Item
            name="first_name"
            rules={rules}>
            <Input id="first_name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="last_name">Familiyasi</label>
          <Form.Item
            name="last_name"
            rules={rules}>
            <Input id="last_name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="middle_name">Otasining ismi</label>
          <Form.Item
            name="middle_name"
            rules={rules}>
            <Input id="middle_name" />
          </Form.Item>
        </Col>
      </Row>

      <h1 className="step-1-content-title">Kontakt ma’lumotlar</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <label htmlFor="phone">Telefon raqami*</label>
          <Form.Item
            name="phone"
            rules={rules}>
            <Input id="phone" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="extra_phone">Qo’shimcha telefon raqami</label>
          <Form.Item
            name="extra_phone"
            rules={rules}>
            <Input id="extra_phone" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="email">Email</label>
          <Form.Item
            name="email"
            rules={null}>
            <Input id="email" type={'email'} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <label htmlFor="is_disabled" className="isDisabled-title">Imkoniyati cheklangan</label>
          <Form.Item
            name="is_disabled">
            <SwitchInput />
          </Form.Item>
        </Col>
        <Col span={8}>
          <label htmlFor="disable_type">Imkoniyati cheklanganlik turi</label>
          <Form.Item
            name="disable_type">
            <Select className="select-before" disabled={!isDisabledValue}>
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
              <Button type="primary" onClick={()=>form.submit()}>
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
        onChange={(info) => onChange(info)} />
      <div className="step-1-image-upload-right">
        <h2>Fotasuratni yuklang</h2>
        <h3>Yuklash mumkin bo'lgan fayl turlaru  .JPEG, .JPG, or .PNG 10 MB gacha.</h3>
        <Upload
          showUploadList={false}
          beforeUpload={(file) => false}
          onChange={(info) => onChange(info)}>
          <Button
            className="btn-upload"
            icon={<img src={require("../../../assets/img/Icon-left.png")} />}>
            Fotasuratni yuklash
          </Button>
        </Upload>
      </div>

    </div>
  )
}

const SwitchInput = ({ value, onChange }) => (
  <div className="disabled-field">
    <label htmlFor="is_disabled" ><h3>Imkoniyati cheklangan bo’lsa qaysi turda ekanligini ko’rsating</h3></label>
    <Switch id="is_disabled" checked={value} onChange={(checked) => {
      onChange(checked)
    }} />
  </div>
)
import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";

import StepNavbar from "../stepNavbar";
import Uploader from "../Uploader";

function Settings({ onBackward }) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const rules = [
    {
      required: true,
      message: "Iltimos maydonni to'ldiring",
    },
  ];

  const onFinish = (values) => {
    console.log("success", values);

    const Settings = {
      first_name: values.first_name,
      last_name: values.last_name,
      middle_name: values.middle_name,
      phone: values.phone,
      current_password: values.current_password,
      new_password: values.new_password,
      confirm_new_password: values.className,
    };
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Sozlamalar</h1>
      <div className="step-1-content">
        <h3>Profilni o'zgartirish</h3>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label htmlFor="first_name">Ismi</label>
              <Form.Item name="first_name" rules={rules}>
                <Input id="first_name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label htmlFor="last_name">Familiyasi</label>
              <Form.Item name="last_name" rules={rules}>
                <Input id="last_name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label htmlFor="middle_name">Otasining ismi</label>
              <Form.Item name="middle_name" rules={rules}>
                <Input id="middle_name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <label htmlFor="phone">Telefon raqami*</label>
              <Form.Item name="phone" rules={rules}>
                <Input id="phone" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item name="date">
                <div>
                  <label>Tug'ilgan sana</label>
                  <DatePicker
                    id="date"
                    onChange={onChange}
                    style={{
                      width: "100%",
                      borderRadius: 7,
                    }}
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>

          <h3>Parolni yangilash</h3>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item name="current_password" rules={rules}>
                <Input.Password
                  placeholder="Hozirgi parol"
                  style={{
                    height: "50px",
                  }}
                  id="current_password"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item name="new_password" rules={rules}>
                <Input.Password
                  placeholder="Yangi parol"
                  style={{
                    height: "50px",
                  }}
                  id="new_password"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item name="confirm_new_password" rules={rules}>
                <Input.Password
                  placeholder="Yangi parolni tasdiqlang"
                  style={{
                    height: "50px",
                  }}
                  id="confirm_new_password"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
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
        </Form>
      </div>
    </div>
  );
}

export default Settings;

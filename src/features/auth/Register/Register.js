/* eslint-disable react-hooks/rules-of-hooks */
import "./register.scss";
import { useState } from "react";
import { register } from "../../../api/auth";
import { MaskedInput } from "antd-mask-input";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  message,
  Checkbox,
  DatePicker,
} from "antd";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const useRegister = (data) => {
    setLoading(true);
    register(data)
      .then((res) => {
        if (res.status === 201) {
          setLoading(false);
          window.location.pathname = "/auth/login";
        }
      })
      .catch((error) => {
        const { response } = error;
        message.error(response?.data?.message?.toString());
      })
      .finally(() => setLoading(false));
  };
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 22,
    },
  };
  const redirectToLogin = () => (window.location.pathname = "/auth/login");
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => useRegister(values))
      .catch((e) => console.log("Error:", e));
  };
  return (
    <div className="register">
      <div className="left-section" />
      <div className="right-section">
        <div className="content">
          <h1 className="title">Ro'yhatdan o'tish</h1>
          <Form layout="vertical" form={form} autoComplete="off">
            <Row>
              <Col span="12">
                <Form.Item
                  label="Ism"
                  name="first_name"
                  {...formItemLayout}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, ismingizni kiriting",
                    },
                  ]}
                >
                  <Input placeholder="Ismingizni kiriting" />
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  name="last_name"
                  label="Familiya"
                  {...formItemLayout}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, familiyangizni kiriting",
                    },
                  ]}
                >
                  <Input placeholder="Familiyangizni kiriting" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <Form.Item
                  name="middle_name"
                  {...formItemLayout}
                  label="Otasining ismi"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, sharifingizni kiriting",
                    },
                  ]}
                >
                  <Input placeholder="Sharifingizni kiriting" />
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  name="phone"
                  label="Telefon raqam"
                  {...formItemLayout}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, telefon raqamingizni kiriting",
                    },
                  ]}
                >
                  <MaskedInput
                    allowClear
                    placeholder="+998"
                    mask="+998 00 000 00 00"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <Form.Item
                  name="birth_date"
                  {...formItemLayout}
                  label="Tug'ilgan sana"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, tug'ilgan sanangizni belgilang",
                    },
                  ]}
                >
                  <DatePicker
                    format="DD.MM.YYYY"
                    style={{ width: "100%" }}
                    placeholder="Tug'ilgan sanani tanlang"
                  />
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  name="password"
                  label="Parol"
                  {...formItemLayout}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, parolni kiriting",
                    },
                  ]}
                >
                  <Input.Password placeholder="Parolni kiriting" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span="12">
                <Form.Item
                  label="Parol"
                  {...formItemLayout}
                  name="password_merge"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos, parolni tasdiqlang!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Kiritilgan parollar bir biriga mos emas!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Parolni tasdiqlang" />
                </Form.Item>
              </Col>
              <Col span="12">
                <Form.Item
                  name="check"
                  {...formItemLayout}
                  style={{ marginTop: "36px" }}
                >
                  <Checkbox>Saytdan foydalanish shartlariga roziman</Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <div className="register-footer">
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                  onClick={handleOk}
                  className="button register"
                >
                  Ro'yxatdan o'tish
                </Button>
              </Form.Item>
              <div className="footer-bottom">
                <p className="register-confirm">Ro’yxatdan o’tganmisiz?</p>
                <Button
                  size="large"
                  type="default"
                  className="button login"
                  onClick={redirectToLogin}
                >
                  Tizimga kirish
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;

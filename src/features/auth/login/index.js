import { useState } from "react";
import { login } from "../../../api/auth";
import { MaskedInput } from "antd-mask-input";
import { Button, Typography, Checkbox, Form, message, Input } from "antd";
const { Title } = Typography;
const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const useLogin = (data) => {
    setLoading(true);
    login(data)
      .then((res) => {
        // console.log("response", res);
        if (res.status === 200) {
          setLoading(false);
          window.location.pathname = "/admin/index";
          localStorage.setItem(
            "Authorization",
            JSON.stringify(res?.data?.token)
          );
          localStorage.setItem("user", JSON.stringify(res?.data));
        }
      })
      .catch((error) => {
        const { response } = error;
        message.error(response?.data?.message?.toString());
      })
      .finally(() => setLoading(false));
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const phone = values.phone.replace(/\s/g, "");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLogin({ phone: phone, password: values.password });
      })
      .catch((e) => console.log("Error:", e));
  };
  const redirect = () => (window.location.pathname = "/auth/register");
  return (
    <div className="login">
      <div className="login-page">
        <Form
          form={form}
          size="large"
          layout="vertical"
          autoComplete="off"
          className="login-wrap"
        >
          <Title level={3}>Tizimga kirish</Title>
          <Form.Item
            name="phone"
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
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Iltimos, parolni kiriting",
              },
            ]}
          >
            <Input.Password type="password" placeholder="Parolni kiriting" />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox>Meni eslab qol</Checkbox>
          </Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={handleOk}
            className="sign-in-button"
          >
            Tizimga kirish
          </Button>
          <div className="login-footer">
            <p className="auth-confirm-text">Sizda akkaunt mavjud emasmi?</p>
            <Button
              block
              type="default"
              onClick={redirect}
              className="register-button"
            >
              Ro’yxatdan o’tish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;

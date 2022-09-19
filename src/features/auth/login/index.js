import { handleLogin } from "./services";
import { Button, Typography, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
const { Title } = Typography;
const Login = () => {
  const [form] = Form.useForm();

  const history = useHistory();
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
          onFinish={handleOk}
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
              onClick={() => {
                history.push("/auth/register");
              }}
              block
              type="default"
<<<<<<< HEAD
=======
              onClick={redirect}
>>>>>>> ab6d526be76d5951559c0e90dae16f5364e850b4
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

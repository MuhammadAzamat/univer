import { handleLogin } from "./services";
import { Button, Typography, Form, Input } from "antd";
const { Title } = Typography;
const Login = () => {
  const [form] = Form.useForm();
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("handleOk", values);
        handleLogin(values).then((res) => {
          window.location.pathname = "/";
          localStorage.setItem("token", JSON.stringify(res.data.token));
        });
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  };
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
          <Form.Item name="phone">
            <Input
              autoComplete="off"
              onPressEnter={handleOk}
              placeholder="Telefon raqamingizni kiriting"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              type="password"
              onPressEnter={handleOk}
              placeholder="Parolni kiriting"
            />
          </Form.Item>
          {/* <Form.Item name="remember">
            <Checkbox>Meni eslab qol</Checkbox>
          </Form.Item> */}
          <Button
            block
            type="primary"
            htmlType="submit"
            className="sign-in-button"
          >
            Tizimga kirish
          </Button>
          <div className="login-footer">
            <p className="auth-confirm-text">Sizda akkaunt mavjud emasmi?</p>
            <Button
              block
              type="default"
              htmlType="submit"
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

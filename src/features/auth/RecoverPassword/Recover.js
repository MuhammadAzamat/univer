import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import React from "react";
import "./recover.css";

const App = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="recover">
      <div className="recover_for_img">
        {/* <img src="../../../assests/img/TATU_logo.png" /> */}
        <div className="recover_child">
          <Form
            className="recover_from"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="recover_wrapp">
              <div className="recover_text">
                <h1>Parolni qayta tiklash</h1>
                <p>
                  Parolni qayta tiklash uchun telefon nomeringizga SMS habar
                  keladi shu orqali parolni yangilashingiz mumkin.
                </p>
              </div>

              <div className="recover_wrapper_input_btn">
                <Form.Item
                  name="number"
                  className="recover_input_item"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <InputNumber className="password_input" />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="recover_submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;

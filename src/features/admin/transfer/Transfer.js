import React from "react";
import { Button, Form, Select, Col, Row } from "antd";
import { Steps } from "antd";

const { Step } = Steps;
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Transfer = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <section className="section-swap">
      <div>
        <h1 className="header-text">O’qishni ko’chirish</h1>
      </div>
      <Steps className="steps-bar" current={0} labelPlacement="vertical">
        <Step
          className="steps-bar-text"
          title="Ta’lim yo’nalishi"
          description=""
        />
        <Step
          className="steps-bar-text"
          title="Umumiy ma’lumotlar"
          description=""
        />
        <Step
          className="steps-bar-text"
          title="Pasport ma’lumotlari"
          description=""
        />
        <Step
          className="steps-bar-text"
          title="Ta’lim / Sertifikatlar"
          description=""
        />
        <Step
          className="steps-bar-text"
          title="Ariza yuborish"
          description=""
        />
      </Steps>
      <div className="step2_container">
        <Form className="form-swap" name="validate_other" onFinish={onFinish}>
          <h3>Oldingi ta’lim yo’nalishi</h3>
          <Row gutter={[24, 16]}>
            {/*Ta’lim muassasasi*/}
            <Col span={8}>
              <label htmlFor="direction">Ta’lim muassasasi</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="direction"
                rules={[
                  { required: true, message: "Ta’lim muassasasi tanlang!" },
                ]}
              >
                <Select
                  size="medium"
                  id="direction"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim muassasasi tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="MoskvaMilliy">
                    Moskva Milliy Universiteti
                  </Option>
                  <Option value="Inha">Inha University in Tashkent</Option>
                  <Option value="West">
                    Westminst1r University in Tashkent
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Ta’lim yo’nalishi */}
            <Col span={8}>
              <label htmlFor="specification">Ta’lim yo’nalishi</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="specification"
                rules={[
                  { required: true, message: "Ta’lim yo’nalishi tanlang!" },
                ]}
              >
                <Select
                  size="medium"
                  id="specification"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim yo’nalishi tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="Moliya">Moliya</Option>
                  <Option value="IT">Axborot Texnologiyalari</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Ta’lim turini */}
            <Col span={8}>
              <label htmlFor="type">Ta’lim turini</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="type"
                rules={[{ required: true, message: "Ta’lim turini tanlang!" }]}
              >
                <Select
                  size="medium"
                  id="type"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim turini tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="kun">Kunduzgi ta’lim</Option>
                  <Option value="sirtqi">Sirtqi ta’lim</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Ta’lim tili */}
            <Col span={8}>
              <label htmlFor="language">Ta’lim tili</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="language"
                rules={[{ required: true, message: "Ta’lim tili tanlang!" }]}
              >
                <Select
                  size="medium"
                  id="language"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim tili tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="rus">Rus</Option>
                  <Option value="eng">Eng</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Ta’lim bosqichi */}
            <Col span={8}>
              <label htmlFor="stage">Ta’lim bosqichi</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="stage"
                rules={[
                  { required: true, message: "Ta’lim bosqichi tanlang!" },
                ]}
              >
                <Select
                  size="medium"
                  id="stage"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim bosqichi tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <h3>Ta’lim yo’nalishi</h3>
          <Row gutter={[24, 16]}>
            {/*Ta’lim yo’nalishi*/}
            <Col span={8}>
              <label htmlFor="direction2">Ta’lim yo’nalishi</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="direction2"
                rules={[
                  { required: true, message: "Ta’lim yo’nalishi tanlang!" },
                ]}
              >
                <Select
                  size="medium"
                  id="direction2"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim yo’nalishi tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="bank">Bank ishi</Option>
                  <Option value="bank">Bank ishi</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Ta’lim turini */}
            <Col span={8}>
              <label htmlFor="type2">Ta’lim turini</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="type2"
                rules={[{ required: true, message: "Ta’lim turini tanlang!" }]}
              >
                <Select
                  size="medium"
                  id="type2"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim turini tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="kun">Kunduzgi ta’lim</Option>
                  <Option value="sirtqi">Sirtqi ta’lim</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Ta’lim tili */}
            <Col span={8}>
              <label htmlFor="language2">Ta’lim tili</label>
              <Form.Item
                style={{ margin: "5px 0" }}
                name="language2"
                rules={[{ required: true, message: "Ta’lim tili tanlang!" }]}
              >
                <Select
                  size="medium"
                  id="language2"
                  style={{ width: "100%" }}
                  placeholder="Ta’lim tili tanlang"
                  allowClear
                  onChange={handleChange}
                >
                  <Option value="rus">Rus</Option>
                  <Option value="eng">Eng</Option>
                  <Option value="uzb">Uzbek</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <div className="prev-next-btns">
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button className="step2_btns">Orqaga</Button>
              <Button className="step2_btns" type="primary" htmlType="submit">
                Oldinga
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Transfer;

import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
import StepNavbar from "./stepNavbar";
import Uploader from "./Uploader";

function Step1({ setstatus }) {

    const { Option } = Select;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const rules = [
        {
            required: true,
            message: 'Iltimos maydonni to\'ldiring',
        }
    ]

    return (
        <div className="step-1-container">
            <h1 className="step-title">Ariza topshirish</h1>
            <StepNavbar />

            <div className="step-1-content">
                <Form
                    onFinish={onFinish}>
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
                            <label htmlFor="phone">Qo’shimcha telefon raqami</label>
                            <Form.Item
                                name="phone"
                                rules={rules}>
                                <Input id="phone" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <label htmlFor="email">Email</label>
                            <Form.Item
                                name="email"
                                rules={rules}>
                                <Input id="email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={8}>
                            <label htmlFor="isDisabled" className="isDisabled-title">Nogironlik holati</label>
                            <Form.Item
                                name="isDisabled">
                                <SwitchInput />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <label htmlFor="disable_type">Nogironlik turi</label>
                            <Form.Item
                                name="disable_type"
                                rules={rules}>
                                <Select className="select-before">
                                    <Option value="1">Birinchi guruh nogironi</Option>
                                    <Option value="2">Ikkinchi guruh nogironi</Option>
                                    <Option value="3">Uchinchi guruh nogironi</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={14}></Col>
                        <Col span={10}>
                            <div className="nav-btns">
                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 8,
                                    }}
                                >
                                    <Button type="default" onClick={() => setstatus(0)}>
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

export default Step1;

const ImageUpload = ({ value = {}, onChange }) => {
    return (
        <div className="step-1-image-upload">
            <Uploader
                value={value}
                beforeUpload={(file) => false}
                onChange={(info) => onChange(info)} />
            <div className="step-1-image-upload-right">
                <h2>Fotasurat ni yuklang</h2>
                <h3>You can upload  .JPEG, .JPG, or .PNG photes not over 1 MB.</h3>
                <Upload
                    showUploadList={false}
                    beforeUpload={(file) => false}
                    onChange={(info) => onChange(info)}>
                    <Button
                        className="btn-upload"
                        icon={<img src={require("../../assets/img/Icon-left.png")} />}>
                        Upload photo
                    </Button>
                </Upload>
            </div>

        </div>
    )
}

const SwitchInput = ({ value, onChange }) => (
    <div className="disabled-field">
        <h3>Nogironli holati bo’lsa qaysi turda ekanligini ko’rsating</h3>
        <Switch onChange={(checked) => {
            onChange(checked)
        }} />
    </div>
)
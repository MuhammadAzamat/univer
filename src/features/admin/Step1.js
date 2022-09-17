import { Button, Col, Form, Input, Row, Upload } from "antd";
import StepNavbar from "./stepNavbar";
import Uploader from "./Uploader";

function Step1() {

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

                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
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
            <Uploader value={value} beforeUpload={(file) => false} onChange={(e) => {
                onChange({ ...value, image: e.file })
            }} />
            <div className="step-1-image-upload-right">
                <h2>Fotasurat ni yuklang</h2>
                <h3>You can upload  .JPEG, .JPG, or .PNG photes not over 1 MB.</h3>
                <Upload
                    showUploadList={false}
                    beforeUpload={(file) => false}
                    onChange={(e) => {
                        onChange({ ...value, image: { file: e.file, name: e.file.name } })
                    }}>
                    <Button className="btn-upload" icon={<img src={require("../../assets/img/Icon-left.png")} />}
                        onChange={(e) => {
                            onChange({
                                ...value,
                                image: e.target.files
                            })
                        }}>
                        Upload photo
                    </Button>
                </Upload>
            </div>

        </div>
    )
}
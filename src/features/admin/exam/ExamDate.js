import { CalendarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Col, Row, Slider } from "antd";
const ExamDate = () => {
  return (
    <div className="exam_date_container">
      <div className="exam-box">
        <CalendarOutlined />
      </div>
      <h3>Sizning imtihon kuningiz belgilandi</h3>
      <p>
        Hurmatli <span>Name Surname</span> IIT universitetida kirish imtihoniga
        qatnashish uchun to’lovni amalga oshirishingiz zarur.
      </p>
      <div className="line_bottom"></div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <p className="exam_details">Sana</p>
          <h5>31/09/2022</h5>
        </Col>
        <Col span={8}>
          <p className="exam_details">Vaqti</p>
          <h5>09:00</h5>
        </Col>
        <Col span={8}>
          <p className="exam_details">Imtihon uchun to’lov</p>
          <h5>100 000 so’m</h5>
        </Col>
        <Col span={8}>
          <p className="exam_details">Imtihon olinadigan til</p>
          <h5>O’zbek</h5>
        </Col>
        <Col span={16}>
          <p className="exam_details">Manzil</p>
          <h5>Toshkent shahar Chilonzor tumani YEOJU Universiteti</h5>
        </Col>
      </Row>
      <Button type="primary">Imtihon uchun to’lash</Button>
    </div>
  );
};

export default ExamDate;

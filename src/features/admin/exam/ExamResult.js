import { ScheduleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const ExamResult = () => {
  return (
    <div className="processing_container">
      <div className="exam_result">
        {/* statusga qarab rang qoshiladi  */}
        <ScheduleOutlined />
      </div>
      <h3>Sizning imtixon natijangiz</h3>
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={8} lg={8}>
          <span className="result_status">Natija</span>
          <h5>120</h5>
        </Col>
        <Col xs={12} sm={12} md={16} lg={16}>
          <span className="result_status">Holati</span>
          {/* statusga qarab rang qoshiladi  */}
          <h5>Status Habar</h5>
        </Col>
      </Row>
      <div className="line_bottom"></div>
      {/* Status ga qarab xabar qoyiladi  */}
      <p className="reject_message">
        Hurmatli <span>Name Surname</span> siz talabalikk tavsiya etilmadingiz
        lekin havotir olishga o’rin yo’q o’qish uchun yana qaytadan imtixon
        topshirish imkoniyatiga egasiz
      </p>
      <p className="accept_message">
        Hurmatli <span>Name Surname</span> Tabriklaymiz, siz talabalikka taklif
        qilindingiz Iltimos, shartnomani olish uchun Toshkent shahar Chilonzor
        tumani YEOJU Universiteti B korpus 101 honaga boring.
      </p>
    </div>
  );
};

export default ExamResult;

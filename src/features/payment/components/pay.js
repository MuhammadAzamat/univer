import { Modal, Row, Col, Avatar, Typography, InputNumber, Button } from "antd";
const { Title } = Typography;
const Pay = ({ isModalOpen, handleCancel, handleOk }) => {
  return (
    <div>
      <Modal
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="payment_wrap">
          <Title className="payment_title" level={3}>
            To'lov
          </Title>
          <Avatar
            size={64}
            src="https://icdn.lenta.ru/images/2022/02/27/18/20220227183718002/square_1280_webp_7dcc0c507ee768e14cad8bf97ffa1005.webp"
          />
          <p className="payment_fullName" level={5}>
            Umarov Jamshid Zafar o’g’li
          </p>
          <div className="payment_form">
            <div className="form_item">
              <div>
                <span className="payment_label">Umumiy summa</span>
              </div>
              <div>
                <InputNumber
                  step={100}
                  size="large"
                  placeholder="Summa"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </div>
            </div>
            <div className="form_item">
              <div>
                <span className="payment_label">To’langan summa</span>
              </div>
              <div>
                <InputNumber
                  step={100}
                  size="large"
                  placeholder="Summa"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </div>
            </div>
          </div>
          <p className="debet">
            Qarzdorlik : <span className="curreny_sum">12 250 000 so’m</span>
          </p>
          <div className="payment_footer">
            <Button size="large" type="default">
              Bekor qilish
            </Button>
            <Button size="large" type="primary">
              Saqlash
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Pay;

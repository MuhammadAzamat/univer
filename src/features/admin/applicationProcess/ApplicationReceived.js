import { CheckOutlined } from "@ant-design/icons";

const ApplicationReceived = () => {
  return (
    <div className="processing_container">
      <div className="checked-box">
        <CheckOutlined />
      </div>
      <h3>Tabriklaymiz, arizangiz qabul qilindi</h3>
      <p>Tez orada imtihon kuning e'lon qilinadi</p>
    </div>
  );
};

export default ApplicationReceived;

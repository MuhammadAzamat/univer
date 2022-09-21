import { MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
const ApplicationProcess = ({form}) => {
  return (
    <div className="processing_container">
      <div className="mail-box">
        <MailOutlined />
      </div>
      <h3>Arizangiz ko’rib chiqilmoqda</h3>
      <p>
        Arizangiz tez orada ko’rib chiqiladi. Ariza holati bo’yicha ma’lumotlar
        shaxsiy sahifaning “Bildirishnoma ” bo’limiga va elektron manzilingizga
        jo’natiladi.
      </p>
      <Button type="primary" onClick={()=>form.setFieldValue('step',0)}>O’zgartirish uchun qaytib olish</Button>
    </div>
  );
};

export default ApplicationProcess;

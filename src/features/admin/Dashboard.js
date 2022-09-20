import { Form, message } from "antd";
import Step0 from "./application/Step0";
import Step1 from "./application/Step1";
import Step2 from "./application/Step2";
import Step3 from "./application/Step3";
import Step4 from "./application/Step4";
import Step5 from "./application/Step5";
import StepNavbar from "./stepNavbar";
import { updateStep1, updateStep2 } from "../../api/user";
import { useState } from "react";
export default function Dashboard() {
  const [form] = Form.useForm();
  const user = JSON.parse(localStorage.getItem("user"));
  const [image, setimage] = useState(null);
  const [passportPhoto, setPassportPhoto] = useState([]);

  const stepValue = Form.useWatch("step", form);

  const uploadAvatar = (image) => {
    const user = JSON.parse(localStorage.getItem("user"));
    var formdata = new FormData();
    formdata.append("tag", "avatar");
    formdata.append("files", image);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      `https://iiiu.spprt.uz/api/v1/${user.id}/medias`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  };
  const uploadPassport = (images) => {
    const user = JSON.parse(localStorage.getItem("user"));
    var formdata = new FormData();
    formdata.append("tag", "passporT_photo");
    formdata.append("files", images[0]?.file);
    formdata.append("files", images[1]?.file);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return fetch(
      `https://iiiu.spprt.uz/api/v1/${user.id}/medias`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  };
  const submitStep1 = async (data) => {
    await uploadAvatar(image)
      .then((resIMg) => (data.personal_photo = resIMg.files[0]))
      .then(() => updateStep1(user.id, data))
      .catch((error) => {
        const { response } = error;
        form.setFieldValue("step", 1);
        message.error(response?.data?.message);
      });
  };
  const submitStep2 = async (data) => {
    await uploadPassport(passportPhoto)
      .then(
        (resIMg) => (data.passport_file = [resIMg.files[0], resIMg.files[2]])
      )
      .then(() => updateStep2(user.id, data))
      .catch((error) => {
        const { response } = error;
        form.setFieldValue("step", 1);
        message.error(response?.data?.message);
      });
  };

  const onFinish = (values) => {
    if (stepValue < 5) {
      localStorage.setItem(
        "data",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("data")),
          ...values,
        })
      );
      if (values.image) {
        setimage(values?.image?.file);
      }
      if (values.passport_file_1) {
        setPassportPhoto((state) => [...state, values.passport_file_1]);
      }
      if (values.passport_file_2) {
        setPassportPhoto((state) => [...state, values.passport_file_2]);
      }

      handleForward();
    } else {
      const data = JSON.parse(localStorage.getItem("data"));
      const step1 = {
        personal_photo: data.personal_photo,
        first_name: data.first_name,
        last_name: data.last_name,
        middle_name: data.middle_name,
        phone: data.phone,
        extra_phone: data.extra_phone,
        email: data.email,
        is_disabled: data.is_disabled || false,
        disabled_type: data.disabled_type || "",
      };
      submitStep1(step1);
      const step2 = {
        passport_type: data.passport_type || false,
        passport_series: data.passport_series || null,
        identification_number: data.identification_number,
        passport_issue_date: data.passport_issue_date,
        passport_expire_date: data.passport_expire_date,
        issued_by: data.issued_by,
        birth_date: data.birth_date,
        gender: data.gender || 0,
        nation: data.nation,
        country: data.country,
        region: data.region,
        district: data.district,
        address: data.address,
        passport_file: data.passport_file,
      };
      submitStep2(step2);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const step3 = {
      certificate_type: values.certificate_type,
      certificate_number: values.certificate_number,
      certificate_score: values.certificate_score,
      certificate_file: values.certificate_file,
      education_type: values.education_type,
      education_name: values.education_name,
      diploma_number: values.diploma_number,
      graduation_year: values.graduation_year,
      diploma_file: values.diploma_file,
    };

    const step4 = {
      direction: values.direction,
      education_type: values.education_type,
      education_language: values.education_language,
    };
  };

  const handleForward = () => {
    form.setFieldValue("step", stepValue + 1);
  };

  const handleBackward = () => {
    form.setFieldValue("step", stepValue - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const data = JSON.parse(localStorage.getItem("data"));
  console.log("data", data);
  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        <Form
          form={form}
          onFinish={onFinish}
          initialValues={{
            step: 0,
            certs: [{}],
            edus: [{}],
            first_name: "Falonchi",
            last_name: "Falonchiyev",
            phone: "+998993249477",
            email: "user@gmail.com",
            // ...data,
          }}
        >
          <Form.Item name="step" style={{ padding: 0, margin: 0 }}>
            {/* {JSON.stringify(form.getFieldsValue())} */}
            <StepNavbar value={stepValue} />
          </Form.Item>
          <RenderSwitch
            value={stepValue}
            form={form}
            onForward={() => {
              handleForward();
            }}
            onBackward={() => {
              handleBackward();
            }}
          />
        </Form>
      </div>
    </div>
  );
}

const RenderSwitch = ({ value, onForward, onBackward, form }) => {
  switch (value) {
    case 1:
      return <Step1 onBackward={onBackward} form={form} />;
    case 2:
      return <Step2 onBackward={onBackward} form={form} />;
    case 3:
      return <Step3 onBackward={onBackward} form={form} />;
    case 4:
      return <Step4 onBackward={onBackward} form={form} />;
    case 5:
      return <Step5 onBackward={onBackward} form={form} />;
    default:
      return <Step0 onForward={onForward} />;
  }
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

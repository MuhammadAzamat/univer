import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import Step0 from "./application/Step0";
import Step1 from "./application/Step1";
import Step2 from "./application/Step2";
import Step3 from "./application/Step3";
import Step4 from "./application/Step4";
import Step5 from "./application/Step5";
import StepNavbar from "./stepNavbar";
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const [status, setstatus] = useState(0);
  const [form] = Form.useForm();
  const stepValue = Form.useWatch("step", form);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (form.getFieldValue("step") < 5) {
      handleForward();
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const step1 = {
      personal_photo: values.personal_photo,
      first_name: values.first_name,
      last_name: values.last_name,
      middle_name: values.middle_name,
      phone: values.phone,
      extra_phone: values.extra_phone,
      email: values.email,
      is_disabled: values.personal_photo || false,
      disabled_type: values.disabled_type || "",
    };

    const step2 = {
      passport_type: values.personal_photo,
      passport_series: values.passport_series,
      identification_number: values.identification_number,
      passport_issue_date: values.passport_issue_date,
      passport_expire_date: values.passport_expire_date,
      issued_by: values.issued_by,
      birth_date: values.birth_date,
      gender: values.gender,
      nation: values.nation,
      country: values.country,
      region: values.region,
      district: values.district,
      address: values.address,
      passport_file: values.passport_file,
    };

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

    console.log("step1", step1);
    console.log("step2", step2);
    console.log("step3", step3);
    console.log("step4", step4);
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
      return <Step2 onBackward={onBackward} form={form}/>;
    case 3:
      return <Step3 onBackward={onBackward} form={form}/>;
    case 4:
      return <Step4 onBackward={onBackward} form={form}/>;
    case 5:
      return <Step5 onBackward={onBackward} form={form}/>;
    default:
      return <Step0 onForward={onForward} />;
  }
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

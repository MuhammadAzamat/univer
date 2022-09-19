import { Steps } from "antd";
const { Step } = Steps;

const StepNavbar = ({ value, onChange }) => (
  <>
    {value != 0 ? <>
      <h1 className="step-title">Ariza topshirish</h1>
      <Steps current={value-1} size="small" labelPlacement="vertical">
        {/* <Step title="Finished" description="This is a description." /> */}
        <Step title="Umumiy ma’lumotlar" />
        <Step title="Pasport ma’lumotlari" />
        <Step title="Ta’lim / Sertifikatlar" />
        <Step title="Ta’lim yo’nalishi" />
        <Step title="Ariza yuborish" />
      </Steps>
    </> : null}
  </>
);

export default StepNavbar;

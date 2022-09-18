import { Steps } from "antd";
const { Step } = Steps;

const StepNavbar = () => (
  <Steps current={0} size="small" labelPlacement="vertical">
    {/* <Step title="Finished" description="This is a description." /> */}
    <Step title="Umumiy ma’lumotlar" />
    <Step title="Pasport ma’lumotlari" />
    <Step title="Ta’lim / Sertifikatlar" />
    <Step title="Ta’lim yo’nalishi" />
    <Step title="Ariza yuborish" />
  </Steps>
);

export default StepNavbar;

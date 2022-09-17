import { Steps } from "antd";
const { Step } = Steps;

const StepNavbar = () => (
  <Steps current={1} percent={60}>
    {/* <Step title="Finished" description="This is a description." /> */}
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="Umumiy ma'lumotlar"
    />
    <Step title="Waiting" description="Pasport ma'lumotlari" />
    <Step title="Waiting" description="Ta'lim / Sertifikatlar" />
    <Step title="Waiting" description="Ta'lim yo'nalishi" />
    <Step title="Waiting" description="Ariza yuborish" />
  </Steps>
);

export default StepNavbar;

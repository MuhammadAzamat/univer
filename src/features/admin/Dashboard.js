import React, { useState } from "react";
import Step0 from "./application/Step0";
import Step1 from "./application/Step1";
import Step2 from "./application/Step2";
import Step3 from "./application/Step3";
import Step4 from "./application/Step4";
import Step5 from "./application/Step5";
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const [status, setstatus] = useState(1);
  return (
    <div className="admin-dashboard">{renderSwitch(status, setstatus)}</div>
  );
}

const renderSwitch = (status, setstatus) => {
  switch (status) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    default:
      return <Step0 setstatus={setstatus} />;
  }
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

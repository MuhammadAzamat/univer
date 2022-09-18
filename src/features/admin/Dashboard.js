import React, { useState } from "react";
import Step0 from "./application/Step0";
import Step1 from "./application/Step1";
import Step2 from "./application/Step2";
import Step3 from "./application/Step3";
import Step4 from "./application/Step4";
import Step5 from "./application/Step5";
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const [status, setstatus] = useState(0);
  return (
    <div className="admin-dashboard">{renderSwitch(status, setstatus)}</div>
  );
}

const renderSwitch = (status, setstatus) => {
  switch (status) {
    case 1:
      return <Step1 setstatus={setstatus} />;
    case 2:
      return <Step2 setstatus={setstatus} />;
    case 3:
      return <Step3 setstatus={setstatus} />;
    case 4:
      return <Step4 setstatus={setstatus} />;
    case 5:
      return <Step5 setstatus={setstatus}  />;
    default:
      return <Step0 setstatus={setstatus} />;
  }
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

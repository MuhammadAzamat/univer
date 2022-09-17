import React, { useState } from "react";
import ContentComp from "./content";
import Step1 from "./Step1";
import Step2 from "./Step2";
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const [status, setstatus] = useState(2);
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
    default:
      return <ContentComp setstatus={setstatus} />;
  }
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

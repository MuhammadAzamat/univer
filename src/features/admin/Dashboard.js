import React, { useState } from 'react';
import ContentComp from './content';
import Step1 from './Step1';
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const [status, setstatus] = useState(0)
  return (
    <div className="admin-dashboard">
      {renderSwitch(status, setstatus)}
    </div>
  );
};

const renderSwitch = (status, setstatus) => {
  switch (status) {
    case 'step_1':
      return <Step1 />
    default:
      return <ContentComp setstatus={setstatus}/>
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

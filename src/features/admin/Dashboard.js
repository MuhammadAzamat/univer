import React from 'react';
import ContentComp from './content';
// import PropTypes from 'prop-types';

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <ContentComp/>
    </div>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

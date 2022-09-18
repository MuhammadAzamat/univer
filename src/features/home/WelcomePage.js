import React from "react";
import Payment from "features/payment/components";
import { Link, useLocation, withRouter } from "react-router-dom";
export default function WelcomePage({}) {
  const history = useLocation();
  return (
    <div className="home-welcome-page jumbotron">
      <Payment />
    </div>
  );
}

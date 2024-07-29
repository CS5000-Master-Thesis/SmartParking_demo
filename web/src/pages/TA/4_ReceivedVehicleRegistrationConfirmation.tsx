import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import useStep from "../../utils/useStep";
import { Layout } from "../../components";
import checkmark from "../../assets/checkmark.svg";

/**
 * Component which will display a Confirmation.
 */
const ReceivedVehicleInformationConfirmation: React.FC = () => {
  const { nextStep } = useStep();

  return (
    <Layout>
      <div className="confirmation-page">
        <div className="selv-wrapper">
          <img src={checkmark} alt="Checkmark" />
          <h4>{"EV registration credential sent"}</h4>
        </div>
        <Link to={nextStep}>
          <Button>{"Continue"}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default ReceivedVehicleInformationConfirmation;

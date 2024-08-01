import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Layout } from "../../components";
import { useGlobalState } from "../../context/globalState";


/**
 * Component which will display a SingInConfirmation.
 */
const SingInConfirmation: React.FC = () => {
  const { state } = useGlobalState();
  const navigate = useNavigate();

  function onSubmit() {
    navigate('/')
    window.location.reload()
  }

  return (
    <Layout>
      <div className="sign-in-confirmation">
        <h2>{"Hello!"}</h2>
        <p style={{wordBreak: "break-word"}}>
          You have signed in using <strong>using your DID {state.PSP?.connectedDID}</strong>
        </p>
        <Button onClick={onSubmit}>{"Start over"}</Button>
      </div>
    </Layout>
  );
};

export default SingInConfirmation;

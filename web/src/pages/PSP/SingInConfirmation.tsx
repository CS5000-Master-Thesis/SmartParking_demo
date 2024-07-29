import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import useStep from "../../utils/useStep";
import { Layout } from "../../components";
import { Trans, useTranslation } from "react-i18next";
import { useGlobalState } from "../../context/globalState";

/**
 * Component which will display a SingInConfirmation.
 */
const SingInConfirmation: React.FC = () => {
  const { nextStep } = useStep();
  const { t } = useTranslation();
  const { state } = useGlobalState();

  return (
    <Layout>
      <div className="sign-in-confirmation">
        <h2>{t("general.hello")}</h2>
        <p>
          <Trans
            i18nKey="pages.company.signInConfirmation.signInSuccess"
            values={{
              DID: state.PSP?.connectedDID,
            }}
            components={{ bold: <strong /> }}
          />
        </p>
        <Link to={nextStep}>
          <Button>{t("actions.continue")}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default SingInConfirmation;

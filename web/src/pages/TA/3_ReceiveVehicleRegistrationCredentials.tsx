import React, { useCallback, useEffect, useState } from "react";
import { Layout, Loading, QRCode } from "../../components";
import useStep from "../../utils/useStep";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  Actions,
  useCredentialsDispatch,
  useGlobalState,
} from "../../context/globalState";
import { Issuers } from "@shared/types/Issuers";
import { Providers } from "@shared/types/Providers";
import { Scopes } from "@shared/types/Scopes";
import VehicleRegistrationCredentialConfig from "@shared/credentials/2_VehicleRegistrationCredential.json";

const ReceiveVehicleInformationCredentials: React.FC = () => {
  const { t } = useTranslation();

  const { nextStep } = useStep();
  const navigate = useNavigate();
  const [loading] = useState(true);
  const dispatch = useCredentialsDispatch();
  const { state } = useGlobalState();

  const goToNextStep = useCallback(() => {
    navigate(nextStep);
  }, [nextStep, navigate]);

  useEffect(() => {
    dispatch?.({
      type: Actions.REQUEST_ISSUANCE,
      provider: Providers.Impierce,
      scope: Scopes.TA_ev_reg,
      credentials: [
        {
          type: VehicleRegistrationCredentialConfig.template.type.at(
            -1
          ) as string,
          data: state.TA_ev_reg?.issuanceData,
        },
      ],
      issuer: Issuers.TA,
    });
  }, [dispatch]);

  useEffect(() => {
    if (state[Scopes.TA_ev_reg]?.issuanceComplete) {
      goToNextStep();
    }
  }, [state, goToNextStep]);

  return (
    <Layout>
      <div className="scan-qr-page-wrapper">
        <h2>{t("pages.general.proveIdentity.provideCredentials")}</h2>
        <p>
          Scan this QR code with <strong>UniMe</strong> to continue
        </p>
        <div className="qr-wrapper">
          {/* TODO: Handle loading state */}
          <QRCode text={state.TA_ev_reg?.QRcontent ?? ""} />
        </div>
        {loading && <Loading />}
      </div>
    </Layout>
  );
};

export default ReceiveVehicleInformationCredentials;

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
import { Providers } from "@shared/types/Providers";
import { Scopes } from "@shared/types/Scopes";

const ProveIdentity: React.FC = () => {
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
      type: Actions.REQUEST_INVITE,
      provider: Providers.Impierce,
      scope: Scopes.PSP,
    });
  }, [dispatch]);

  useEffect(() => {
    if (state[Scopes.PSP]?.connectedDID) {
      goToNextStep();
    }
  }, [state, goToNextStep]);

  return (
    <Layout>
      <div className="scan-qr-page-wrapper">
        <h2>{"Provide Your Digital Identity Credentials"}</h2>
        <p>
          Scan this QR code with <strong>UniMe</strong> to continue
        </p>
        <div className="qr-wrapper">
          {/* TODO: Handle loading state */}
          <QRCode text={state[Scopes.PSP]?.QRcontent ?? ""} />
        </div>
        {loading && <Loading />}
      </div>
    </Layout>
  );
};

export default ProveIdentity;

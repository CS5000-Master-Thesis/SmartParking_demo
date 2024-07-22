import React, { useCallback, useEffect, useState } from "react";
import {
  Layout,
  Loading,
  QRCode,
  RandomGraphicElement,
} from "../../components";
import useStep from "../../utils/useStep";
import { useTranslation, Trans } from "react-i18next";
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
  const [status] = useState(
    "pages.general.proveIdentity.waitingForLogin"
  );
  const dispatch = useCredentialsDispatch();
  const { state } = useGlobalState();

  const goToNextStep = useCallback(() => {
    navigate(nextStep);
  }, [nextStep, navigate]);

  useEffect(() => {
    dispatch?.({
      type: Actions.REQUEST_INVITE,
      provider: Providers.Impierce,
      scope: Scopes.OEM,
    });
  }, [dispatch]);

  useEffect(() => {
    if (state[Scopes.OEM]?.connectedDID) {
      goToNextStep();
    }
  }, [state, goToNextStep]);

  return (
    <Layout>
      <RandomGraphicElement elements={5}>
        <div className="scan-qr-page-wrapper">
          <h2>{t("pages.general.proveIdentity.provideCredentials")}</h2>
          <p>
            <Trans i18nKey="pages.general.proveIdentity.scanToContinue">
              Scan this QR code with <strong>UniMe</strong> to continue
            </Trans>
          </p>
          <div className="qr-wrapper">
            {/* TODO: Handle loading state */}
            <QRCode text={state[Scopes.OEM]?.QRcontent ?? ""} />
          </div>
          <p className="bold">{t(status)}</p>
          {loading && <Loading />}
        </div>
      </RandomGraphicElement>
    </Layout>
  );
};

export default ProveIdentity;
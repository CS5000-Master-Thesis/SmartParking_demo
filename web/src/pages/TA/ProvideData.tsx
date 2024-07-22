import React, { useCallback, useEffect, useState } from 'react';
// import randomstring from 'randomstring';
import { Layout, Loading, QRCode, RandomGraphicElement } from '../../components';
import useStep from '../../utils/useStep';
// import config from '../../config.json';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Actions, useCredentialsDispatch, useGlobalState } from '../../context/globalState';
import { Providers } from '@shared/types/Providers';
// import { Issuers } from '@shared/types/Issuers';
import { Scopes } from '@shared/types/Scopes';

import { v4 as uuidv4 } from 'uuid';
import VehicleInformationCredentialConfig from "@shared/credentials/1_VehicleInformationCredential.json";



const ProvideData: React.FC = () => {
    const { t } = useTranslation();

    const { nextStep } = useStep();
    const navigate = useNavigate();
    const [loading] = useState(true);
    const [status] = useState("pages.general.proveIdentity.waitingForLogin");
    const dispatch = useCredentialsDispatch();
    const { state } = useGlobalState();

    const goToNextStep = useCallback(() => {
        navigate(nextStep);
    }, [nextStep, navigate]);

    useEffect(() => {

        dispatch?.({
            type: Actions.REQUEST_PRESENTATION,
            provider: Providers.Impierce,
            presentationDefinition: {
                id: uuidv4(),
                input_descriptors: VehicleInformationCredentialConfig.input_descriptors
            },
            scope: Scopes.TA,

        })

    }, [dispatch]);

    useEffect(() => {
        if (state[Scopes.TA]?.credentials?.length) {
            goToNextStep();
        }
    }, [state, goToNextStep])

    return (
        <Layout>
            <RandomGraphicElement elements={5}>
                <div className='scan-qr-page-wrapper'>
                    <h2>{t("pages.general.proveIdentity.provideCredentials")}</h2>
                    <p>
                        <Trans i18nKey="pages.general.proveIdentity.scanToContinue">
                            Scan this QR code with <strong>Selv App</strong> to continue
                        </Trans>
                    </p>
                    <div className='qr-wrapper'>
                        {/* TODO: Handle loading state */}
                        <QRCode text={state[Scopes.TA]?.QRcontent ?? ""} />
                    </div>
                    <p className='bold'>{t(status)}</p>
                    {loading && <Loading />}
                </div>
            </RandomGraphicElement>
        </Layout>
    );
};

export default ProvideData;

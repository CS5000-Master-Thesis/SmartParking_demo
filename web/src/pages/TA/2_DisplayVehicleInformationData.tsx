import React, { useState, useEffect } from 'react';
// import { Button, notification } from 'antd';
// import { flattenObject } from '../../utils/helper';
import { Layout, Form, PrefilledForm } from '../../components';
import { useTranslation } from 'react-i18next';
import { Actions, State, useCredentialsDispatch, useGlobalState } from '../../context/globalState';
import { useNavigate } from 'react-router-dom';
import useStep from '../../utils/useStep';
import { Scopes } from '@shared/types/Scopes';
import { Button } from 'antd';
import VehicleInformationCredentialConfig from "@shared/credentials/1_VehicleInformationCredential.json";

import DomainCheck from '../../components/DomainCheck';

const emptyFields = [{
    field: 'CompanyName',
    label: 'pages.company.companyData.companyName',
},
{
    field: 'CompanyAddress',
    label: 'pages.company.companyData.companyAddress',
},
{
    field: 'CompanyType',
    label: 'pages.company.companyData.companyType',
},
{
    field: 'CompanyBusiness',
    label: 'pages.company.companyData.companyBusiness',
}
];

// const notify = (type: string, message: string, description: string) => {
//     return type === 'error'
//         ? notification.error({ message, description })
//         : notification.warning({ message, description });
// };

/**
 * Component which will display a CompanyData.
 */
const DisplayVehicleInformationData: React.FC = ({ history, match }: any) => {
    const [values, setValues] = useState<null | any>(null);
    const [relevantCredential, setRelevantCredential] = useState<null | any>(null);
    const [prefilledData, setPrefilledData] = useState({});
    const [validatedDomains, setValidatedDomains] = useState<State['validatedDomains'][keyof State['validatedDomains']] | null>(null);
    const { state } = useGlobalState();
    const { nextStep } = useStep();
    const dispatch = useCredentialsDispatch();
    const navigate = useNavigate();

    const { t } = useTranslation();

    function onSubmit() {
        dispatch?.({type: Actions.SET_ISSUANCE_DATA, issuanceData: values, scope: Scopes.TA_ev_reg});
        navigate(nextStep);
    }

    useEffect(() => {
        if (!state[Scopes.TA_ev_reg]?.credentials.length) return;
        setRelevantCredential(state[Scopes.TA_ev_reg].credentials.filter((c: any) => c.credential?.type.includes(VehicleInformationCredentialConfig.template.type.pop()))?.[0]?.credential);
    }, [state, setRelevantCredential])

    useEffect(() => {
        if (!relevantCredential) return;
        setPrefilledData({
            'Type': relevantCredential.credentialSubject.type,
            'Make': relevantCredential.credentialSubject.make,
            'Model': relevantCredential.credentialSubject.model,
            'Year': relevantCredential.credentialSubject.year,
            'VIN': relevantCredential.credentialSubject.vin,
        })

        let { vin } = relevantCredential.credentialSubject;
        setValues({ 
            vin
        })
    }, [relevantCredential])

    useEffect(() => {
        if (!relevantCredential) return;
        setValidatedDomains(state.validatedDomains[relevantCredential.issuer])
    }, [state, relevantCredential])

    return (
        <Layout>
            <div className='company-data-page-wrapper'>
                <h2>{t("Register EV to EV owner")}</h2>
                <section>
                    <h3 className='section-header'>{t("EV information")}</h3>
                    {validatedDomains && (validatedDomains !== 'in-flight') && (
                        <DomainCheck result={validatedDomains} />
                    )}
                    {
                        // Object.keys(prefilledFormData.dataFields).length &&
                        <PrefilledForm dataFields={prefilledData} />
                    }
                </section>
                <section>
                    <h3 className='section-header'>{t("pages.insurance.insuranceData.companyDetails")}</h3>
                    <p>Will be issued by <b>company.selv.iota.org</b></p> {/* TODO */} 
                    <p>to <b>{state.TA_ev_reg?.connectedDID}</b></p> {/* TODO */} 
                    <Form dataFields={emptyFields} onSubmit={onSubmit} submitLabel={t("actions.continue")}/>
                </section>
                <Button onClick={onSubmit} disabled={!values}>{ t("actions.continue") }</Button>
            </div>

        </Layout>
    );
};

export default DisplayVehicleInformationData;

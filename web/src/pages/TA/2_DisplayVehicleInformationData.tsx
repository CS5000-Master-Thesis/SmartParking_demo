import React, { useState, useEffect } from "react";
import { Layout, Form, PrefilledForm } from "../../components";
import { useTranslation } from "react-i18next";
import {
  Actions,
  State,
  useCredentialsDispatch,
  useGlobalState,
} from "../../context/globalState";
import { useNavigate } from "react-router-dom";
import useStep from "../../utils/useStep";
import { Scopes } from "@shared/types/Scopes";
import VehicleInformationCredentialConfig from "@shared/credentials/1_VehicleInformationCredential.json";

import DomainCheck from "../../components/DomainCheck";

const emptyFields = [
  {
    field: "registrationNumber",
    label: "Registration Number",
    placeholder: "AB12345",
  },
];

/**
 * Component which will display a CompanyData.
 */
const DisplayVehicleInformationData: React.FC = ({ history, match }: any) => {
  const [relevantCredential, setRelevantCredential] = useState<null | any>(
    null
  );
  const [prefilledData, setPrefilledData] = useState({});
  const [validatedDomains, setValidatedDomains] = useState<
    State["validatedDomains"][keyof State["validatedDomains"]] | null
  >(null);
  const { state } = useGlobalState();
  const { nextStep } = useStep();
  const dispatch = useCredentialsDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  function onSubmit(values: any) {
    // let { vin } = relevantCredential.credentialSubject;
    // const allValues = {
    //   vin,
    //   ...values,
    // };

    dispatch?.({
      type: Actions.SET_ISSUANCE_DATA,
      issuanceData: values,
      scope: Scopes.TA_ev_reg,
    });
    navigate(nextStep);
  }

  useEffect(() => {
    if (!state[Scopes.TA_ev_reg]?.credentials.length) return;
    setRelevantCredential(
      state[Scopes.TA_ev_reg].credentials.filter((c: any) =>
        c.credential?.type.includes(
          VehicleInformationCredentialConfig.template.type.pop()
        )
      )?.[0]?.credential
    );
  }, [state, setRelevantCredential]);

  useEffect(() => {
    if (!relevantCredential) return;
    setPrefilledData({
      Type: relevantCredential.credentialSubject.type,
      Make: relevantCredential.credentialSubject.make,
      Model: relevantCredential.credentialSubject.model,
      Year: relevantCredential.credentialSubject.year,
      VIN: relevantCredential.credentialSubject.vin,
    });
  }, [relevantCredential]);

  useEffect(() => {
    if (!relevantCredential) return;
    setValidatedDomains(state.validatedDomains[relevantCredential.issuer]);
  }, [state, relevantCredential]);

  return (
    <Layout>
      <div className="company-data-page-wrapper">
        <h2>{"Register EV"}</h2>
        <section>
          <h3 className="section-header">{"EV information"}</h3>
          {validatedDomains && validatedDomains !== "in-flight" && (
            <DomainCheck result={validatedDomains} />
          )}
          {<PrefilledForm dataFields={prefilledData} />}
        </section>

        <section>
          <h3 className="section-header">{"Set registration number"}</h3>
          <Form
            dataFields={emptyFields}
            onSubmit={onSubmit}
            submitLabel={"Continue"}
          />
        </section>
      </div>
    </Layout>
  );
};

export default DisplayVehicleInformationData;

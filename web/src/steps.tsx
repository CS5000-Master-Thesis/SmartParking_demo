import * as React from "react";

import * as TA from "./pages/TA";
import * as OEM from "./pages/OEM";
// import * as Insurance from "./pages/Insurance";

import {
  Landing,
  IntroShowTodos,
  IntroShowMobile,
//   AppDownloadQR,
//   BankData,
//   InsuranceData,
  GreatSuccess,
  ThankYou,
  AppPicker,
} from "./pages";

import TangleLabs from "./components/powerdBy/TangleLabs";
import Impierce from "./components/powerdBy/Impierce";
// import Waltid from "./components/powerdBy/Waltid";

export const routes = [
  { path: "/:lng?", element: <Landing /> },
  { path: "/:lng?/demo/todos", element: <IntroShowTodos /> },
  // { path: "/:lng?/demo/app", element: <IntroShowMobile /> },
  // { path: "/:lng?/demo/app-picker", element: <AppPicker />, step: "oem" },
  // { path: "/:lng?/oem/prove", element: <OEM.ProveIdentity />, step: "oem", poweredBy: <TangleLabs /> },
  // { path: "/:lng?/oem/signin", element: <OEM.SingInConfirmation />, step: "oem", poweredBy: <TangleLabs />  },
  { path: "/:lng?/oem/receive", element: <OEM.ReceiveCredentials />, step: "oem", poweredBy: <TangleLabs /> },
  { path: "/:lng?/oem/confirm", element: <OEM.Confirmation />, step: "oem", poweredBy: <TangleLabs /> },
  // { path: "/:lng?/ta/prove", element: <TA.ProveIdentity />, step: "ta", poweredBy: <Impierce />  },
  // { path: "/:lng?/ta/signin", element: <TA.SingInConfirmation />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/provide", element: <TA.ProvideData />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/data", element: <TA.CompanyData />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/receive", element: <TA.ReceiveCredentials />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/confirm", element: <TA.Confirmation />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/demo/success", element: <GreatSuccess /> },
  { path: "/:lng?/demo/thankyou", element: <ThankYou /> },
];

//These are now just the keys for the translation that get dynamically loaded
export const mainSteps = [
  { id: "oem", title: "Original Equipment Manufacturer" },
  { id: "ta", title: "Transportation Authority" },
  { id: "psp", title: "Parking Service Provider" },
];

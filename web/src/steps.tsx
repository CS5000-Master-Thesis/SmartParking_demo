import * as React from "react";

import * as TA from "./pages/TA";
import * as OEM from "./pages/OEM";
import * as PSP from "./pages/PSP";

import {
  Landing,
  IntroShowTodos,
  GreatSuccess,
  ThankYou,
} from "./pages";

import Impierce from "./components/powerdBy/Impierce";

export const routes = [
  { path: "/:lng?", element: <Landing /> },
  { path: "/:lng?/demo/todos", element: <IntroShowTodos /> },
  // { path: "/:lng?/demo/app", element: <IntroShowMobile /> },
  { path: "/:lng?/oem/receive_vehicle_information", element: <OEM.ReceiveVehicleInformationCredentials />, step: "oem", poweredBy: <Impierce /> },
  { path: "/:lng?/oem/confirm_vehicle_information", element: <OEM.VehicleInformationConfirmation />, step: "oem", poweredBy: <Impierce /> },
  
  { path: "/:lng?/ta/provide_vehicle_information", element: <TA.ProvideVehicleInformationData />, step: "ta_1", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/display_vehicle_information", element: <TA.DisplayVehicleInformationData />, step: "ta_1", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/receive_vehicle_registration", element: <TA.ReceiveVehicleRegistrationCredentials />, step: "ta_2", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/confirm_vehicle_registration", element: <TA.ReceivedVehicleRegistrationConfirmation />, step: "ta_2", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/receive_vehicle_ownership", element: <TA.ReceiveVehicleOwnershipCredentials />, step: "ta_3", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/confirm_vehicle_ownership", element: <TA.ReceivedVehicleOwnershipConfirmation />, step: "ta_3", poweredBy: <Impierce /> },

  { path: '/:lng?/psp/prove_idenity', element: <PSP.ProveIdentity/>, step: "psp", poweredBy: <Impierce/> },
  { path: '/:lng?/psp/signin_confirmation', element: <PSP.SingInConfirmation/>, step: "psp", poweredBy: <Impierce/> },

  { path: "/:lng?/demo/success", element: <GreatSuccess /> },
  { path: "/:lng?/demo/thankyou", element: <ThankYou /> },
];

//These are now just the keys for the translation that get dynamically loaded
export const mainSteps = [
  { id: "oem", title: "OEM: Receive EV info" },
  { id: "ta_1", title: "TA: Request EV info" },
  { id: "ta_2", title: "TA: Receive EV reg" },
  { id: "ta_3", title: "TA: Receive EV ownership" },
  { id: "psp", title: "PSP: Login" },
];

import * as React from "react";

import * as TA from "./pages/TA";
import * as OEM from "./pages/OEM";

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
  // { path: "/:lng?/ta/prove", element: <TA.ProveIdentity />, step: "ta", poweredBy: <Impierce />  },
  // { path: "/:lng?/ta/signin", element: <TA.SingInConfirmation />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/provide_vehicle_information", element: <TA.ProvideVehicleInformationData />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/display_vehicle_information", element: <TA.DisplayVehicleInformationData />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/receive_vehicle_registration", element: <TA.ReceiveVehicleRegistrationCredentials />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/confirm_vehicle_registration", element: <TA.ReceivedVehicleRegistrationConfirmation />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/receive_vehicle_ownership", element: <TA.ReceiveVehicleOwnershipCredentials />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/ta/confirm_vehicle_ownership", element: <TA.ReceivedVehicleOwnershipConfirmation />, step: "ta", poweredBy: <Impierce /> },
  { path: "/:lng?/demo/success", element: <GreatSuccess /> },
  { path: "/:lng?/demo/thankyou", element: <ThankYou /> },
];

//These are now just the keys for the translation that get dynamically loaded
export const mainSteps = [
  { id: "oem", title: "Original Equipment Manufacturer" },
  { id: "ta", title: "Transportation Authority" },
  { id: "psp", title: "Parking Service Provider" },
];

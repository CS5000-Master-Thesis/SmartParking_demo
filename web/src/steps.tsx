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

// import ParticipantsAll from "./components/current_participants/participants_all";
import ParticipantsEvOem from "./components/current_participants/participants_ev_oem";
import ParticipantsEvTa from "./components/current_participants/participants_ev_ta";
import ParticipantsOwnerPsp from "./components/current_participants/participants_owner_psp";
import ParticipantsOwnerTa from "./components/current_participants/participants_owner_ta";

export const routes = [
  // { path: "/:lng?", element: <Landing /> },
  // { path: "/:lng?/demo/todos", element: <IntroShowTodos /> },
  // { path: "/:lng?/demo/app", element: <IntroShowMobile /> },
  { path: "/", element: <IntroShowTodos /> },
  { path: "/oem/receive_vehicle_information", element: <OEM.ReceiveVehicleInformationCredentials />, step: "oem", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvOem /> },
  { path: "/oem/confirm_vehicle_information", element: <OEM.VehicleInformationConfirmation />, step: "oem", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvOem /> },
  
  { path: "/ta/provide_vehicle_information", element: <TA.ProvideVehicleInformationData />, step: "ta_1", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvTa /> },
  { path: "/ta/display_vehicle_information", element: <TA.DisplayVehicleInformationData />, step: "ta_1", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvTa /> },
  { path: "/ta/receive_vehicle_registration", element: <TA.ReceiveVehicleRegistrationCredentials />, step: "ta_2", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvTa /> },
  { path: "/ta/confirm_vehicle_registration", element: <TA.ReceivedVehicleRegistrationConfirmation />, step: "ta_2", poweredBy: <Impierce />, currentParticipants: <ParticipantsEvTa /> },
  { path: "/ta/receive_vehicle_ownership", element: <TA.ReceiveVehicleOwnershipCredentials />, step: "ta_3", poweredBy: <Impierce />, currentParticipants: <ParticipantsOwnerTa /> },
  { path: "/ta/confirm_vehicle_ownership", element: <TA.ReceivedVehicleOwnershipConfirmation />, step: "ta_3", poweredBy: <Impierce />, currentParticipants: <ParticipantsOwnerTa /> },

  { path: '/psp/prove_idenity', element: <PSP.ProveIdentity/>, step: "psp", poweredBy: <Impierce/>, currentParticipants: <ParticipantsOwnerPsp /> },
  { path: '/psp/signin_confirmation', element: <PSP.SingInConfirmation/>, step: "psp", poweredBy: <Impierce/>, currentParticipants: <ParticipantsOwnerPsp /> },

  // { path: "/:lng?/demo/success", element: <GreatSuccess /> },
  // { path: "/:lng?/demo/thankyou", element: <ThankYou /> },
];

//These are now just the keys for the translation that get dynamically loaded
export const mainSteps = [
  { id: "oem", title: "OEM - Receive EV info" },
  { id: "ta_1", title: "TA - Request EV info" },
  { id: "ta_2", title: "TA - Receive EV reg" },
  { id: "ta_3", title: "TA - Receive EV ownership" },
  { id: "psp", title: "PSP - Login" },
];

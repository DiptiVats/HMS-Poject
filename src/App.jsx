import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage, { action as loginFun } from "./pages/LoginPage";
import DashBoardLayoutPage, {
  loader as patientFun,
} from "./pages/DashBoardLayoutPage";
import Patient from "./components/PatientLayout/Patient";
import AddPatient, { action as patientAddFun } from "./components/AddPatient";
import Medicine, { loader as medicineListFun } from "./components/Medicine";
import AddMedicine, {
  action as addMedicineFun,
} from "./components/AddMedicine";
//import Auth from "./components/Auth";
import IPD_Register from "./components/IPD_Register";
import Payment, { loader as paymentFun } from "./components/Payment";
import Reprint from "./components/Reprint";
import "firebase/auth";
import MakePayment from "./components/MakePayment";
import Admit from "./components/Admit";
import Consent from "./components/Consent";
import OPD_Main from "./components/OPD/OPD_Main";
import EditPatient, {
  action as editPatientFun,
} from "./components/EditPatient";

const router = createBrowserRouter([
  { path: "", element: <LoginPage />, action: loginFun },
  {
    path: "dashboard",
    element: <DashBoardLayoutPage />,
    id: "patientData",
    loader: patientFun,
    children: [
      { path: "", element: <Patient /> },
      {
        path: "/dashboard/add-patient",
        element: <AddPatient />,
        action: patientAddFun,
      },
      {
        path: "/dashboard/edit-patient",
        element: <EditPatient />,
        action: editPatientFun,
      },
      { path: "medicine", element: <Medicine />, loader: medicineListFun },
      {
        path: "/dashboard/add-medicine",
        element: <AddMedicine />,
        action: addMedicineFun,
      },
      { path: "ipd-register", element: <IPD_Register /> },
      { path: "payment-register", element: <Payment />, loader: paymentFun },
      { path: "reprint", element: <Reprint /> },
      { path: "admit", element: <Admit /> },
      { path: "OPD", element: <OPD_Main /> },
      { path: "make-payment", element: <MakePayment /> },
      { path: "consent", element: <Consent /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

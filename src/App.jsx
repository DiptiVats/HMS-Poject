import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage, { action as loginFun } from "./pages/LoginPage";
import DashBoardLayoutPage from "./pages/DashBoardLayoutPage";
import Patient, {
  loader as patientFun,
} from "./components/PatientLayout/Patient";
import Medicine, { loader as medicineListFun } from "./components/Medicine";
import AddMedicine, {
  action as addMedicineFun,
} from "./components/AddMedicine";
//import Auth from "./components/Auth";
import IPD_Register from "./components/IPD_Register";
import Payment, { loader as paymentFun } from "./components/Payment";
import Reprint from "./components/Reprint";
import PatientAdd, { action as patientAddFun } from "./components/PatientAdd";
import "firebase/auth";
import MakePayment from "./components/MakePayment";
import Admit from "./components/Admit";
import Consent from "./components/Consent";
import OPD_Main from "./components/OPD/OPD_Main";

const router = createBrowserRouter([
  { path: "", element: <LoginPage />, action: loginFun },
  {
    path: "dashboard",
    element: <DashBoardLayoutPage />,
    children: [
      { path: "", element: <Patient />, loader: patientFun },
      {
        path: "/dashboard/add-patient",
        element: <PatientAdd />,
        action: patientAddFun,
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

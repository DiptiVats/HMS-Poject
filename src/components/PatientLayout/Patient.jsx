import { FaEdit } from "react-icons/fa";
import { SlExclamation } from "react-icons/sl";
import classes from "./Patient.module.css";
import AddPatientForm from "./AddPatientForm";
import {
  Link,
  redirect,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { useEffect } from "react";
export default function Patient() {
  const patientData = useRouteLoaderData("patientData");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      return redirect("/");
    }
  }, [token]);

  console.log(patientData);
  return (
    <div className={classes.patientDetail}>
      <div>
        <AddPatientForm />
      </div>
      <div className={classes.patientTable}>
        &nbsp; &nbsp; &nbsp;
        <span style={{ color: "orange" }}>Patient List</span>
        <table>
          <thead>
            <tr>
              <td>Sr No.</td>
              <td>Code</td>
              <td>Patient Detail</td>
              <td>
                Privious Payment
                <br /> Detail
              </td>
              <td>Admit</td>
              <td>OPD</td>
              <td>Payment</td>
              <td>Consent</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {patientData.length > 0 ? (
              patientData.map((data, index) => (
                <tr key={data.tokenId}>
                  <td>{[index + 1]}</td>
                  <td>{data.tokenId}</td>
                  <td>
                    {data.name} | {data.age} Yrs | {data.gender}
                    <br />
                    Adderss: {data.address} <br />
                    Telephone: {data.telephone}
                  </td>
                  <td>
                    {data.prevPaymentDetail ? (
                      <span>
                        {`Rs.${data.prevPaymentDetail}`}
                        <SlExclamation className={classes.paymentIcon} />
                      </span>
                    ) : (
                      "NIL"
                    )}
                  </td>
                  <td>
                    <Link to="/dashboard/admit">
                      <button>Admit</button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/dashboard/opd">
                      <button>ODP</button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/dashboard/make-payment">
                      <button>Payment</button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/dashboard/consent">
                      <button>Consent</button>
                    </Link>
                  </td>
                  <td>
                    <span>
                      <Link
                        to={`/dashboard/edit-patient?patId=${data.tokenId}`}
                      >
                        <FaEdit className={classes.editIcon} />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th
                  style={{ borderTopWidth: "2rem", backgroundColor: "#22252a" }}
                  colSpan={9}
                >
                  Please enter a valid code !
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

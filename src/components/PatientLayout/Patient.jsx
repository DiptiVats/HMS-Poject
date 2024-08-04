import { FaEdit } from "react-icons/fa";
import { SlExclamation } from "react-icons/sl";
import classes from "./Patient.module.css";
import AddPatientForm from "./AddPatientForm";
import { PATIENT_DATA } from "./patientData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Patient() {
  const [patientData, setPatientData] = useState(PATIENT_DATA);
  const [addedCode, setAddedCode] = useState("");

  function handleAddCode(code) {
    setAddedCode(code);
    console.log(addedCode);
  }

  function handlePatientData() {
    setPatientData(PATIENT_DATA.filter((data) => data.code === addedCode));
  }

  function handleResetData(e) {
    e.preventDefault();
    setPatientData(PATIENT_DATA);
  }
  return (
    <div className={classes.patientDetail}>
      <div>
        <AddPatientForm
          onEnteredCode={handleAddCode}
          onSearchPatient={handlePatientData}
          onReset={handleResetData}
        />
      </div>
      <div className={classes.patientTable}>
        &nbsp; &nbsp; &nbsp;
        <span style={{ color: "orange" }}>Patient List</span>
        <table>
          <thead>
            <tr>
              <td>Token No.</td>
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
              patientData.map((data) => (
                <tr key={data.tokenNo}>
                  <td>{data.tokenNo}</td>
                  <td>{data.code}</td>
                  <td>
                    {data.patientName} | {data.age} Yrs | {data.gender}
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
                    <FaEdit className={classes.editIcon} />
                  </td>
                </tr>
              ))
            ) : (
              <th
                style={{ borderTopWidth: "2rem", backgroundColor: "#22252a" }}
                colSpan={9}
              >
                Please enter a valid code !
              </th>
            )}

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/*export async function loader() {
  const patientData = collection(db, "PatientData");
  try {
    const data = await getDocs(patientData);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
*/

export async function loader() {
  console.log("Fetching patient data ......");
  const response = await fetch("http://localhost:3002/HMS/getPatientData");
  const resData = await response.json();
  console.log(resData);
  if (response.ok) {
    console.log("Data successfully fetched!");
  }
  console.log(resData);
  return resData;
}

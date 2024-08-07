import { FaEdit } from "react-icons/fa";
import { SlExclamation } from "react-icons/sl";
import classes from "./Patient.module.css";
import AddPatientForm from "./AddPatientForm";
import { Link, useLoaderData } from "react-router-dom";
export default function Patient() {
  const Data = useLoaderData();
  const patientData = Data;

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
                    <FaEdit className={classes.editIcon} />
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

export async function loader({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  console.log(param);
  let Url =
    "https://ef56-2401-4900-8842-6427-141-d781-b499-d907.ngrok-free.app/Patient/loadAllPatient";
  let Body = {};
  if (param.patId) {
    Url =
      "https://ef56-2401-4900-8842-6427-141-d781-b499-d907.ngrok-free.app/Patient/loadPatient";
    Body = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    };
  }
  try {
    console.log("Fetching patient data......");
    const response = await fetch(Url, {
      method: "POST",
      ...Body,
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
    return err;
  }
}

import { Link, useLoaderData, json } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
import classes from "./Payment.module.css";
export default function Payment() {
  const paymentData = useLoaderData();
  return (
    <div>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Payment Register</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <button className={classes.roundedButton}>
            <FaPrint />
            &nbsp; Consolidate Print
          </button>
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Payment
        Register
      </div>
      {/* ------------ first grid */}
      <div className={classes.firstGrid}>
        <div className={classes.firstGridElem}>
          <div>From</div>
          <div className={classes.inputs}>
            <input type="date" placeholder="date" />
          </div>
        </div>
        <div className={classes.firstGridElem}>
          <div>To</div>
          <div className={classes.inputs}>
            <input type="date" placeholder="date" />
          </div>
        </div>
        <div className={classes.firstGridElem}>
          <div>On Account Of</div>
          <div className={classes.inputs}>
            <select>
              <option>Select Treatment Type</option>
              <option>OPD</option>
              <option>X-Ray</option>
              <option>Psysiotherapy</option>
              <option>Minor</option>
              <option>Emergency</option>
            </select>
          </div>
        </div>
      </div>
      {/*----------- second grid ----------------*/}
      <div className={classes.secondGrid}>
        <button className={classes.roundedButton}>Submit</button>
      </div>
      {/*----------- third grid ----------------*/}
      <div className={classes.thirdGrid}>
        <p>Payment Record</p>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Token no.</td>
              <td>Patient Detail</td>
              <td>Type</td>
              <td>Amount</td>
              <td>Print</td>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((data) => (
              <tr key={data.tokenNo}>
                <td>{data.date}</td>
                <td>{data.tokenNo}</td>
                <td>
                  {data.patientName} | {data.age} Yrs | {data.gender}
                  <br />
                  Adderss: {data.address} <br />
                  Telephone: {data.telephone}
                </td>
                <td>{data.type}</td>
                <td>{data.amount}</td>
                <td>
                  <FaPrint className={classes.icon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function loader() {
  console.log("Fetching patient data ......");
  const response = await fetch("http://localhost:3002/HMS/getPaymentDetail");
  const resData = await response.json();
  console.log(resData);
  if (response.ok) {
    console.log("Data successfully fetched!");
  }
  console.log(resData);
  return resData;
}

import classes from "./PatientAdd.module.css";
import { Form, json, redirect, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";
export default function PatientAdd() {
  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.patientText}>Add Patient</div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Add
        Patient
      </div>
      <Form method="post">
        {/* ---------------------first grid ----------------*/}
        <div className={classes.firstGrid}>
          <input type="text" name="firstName" placeholder="First Name*" />
          <input type="text" name="secondName" nameplaceholder="Last Name*" />
        </div>
        {/* --------------------- second grid ----------------*/}
        <div className={classes.secondGrid}>
          <input
            type="number"
            name="age"
            placeholder="Age*"
            className={classes.firstGridInp}
          />

          <div>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male"> Male </label>

            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female"> Female </label>
          </div>

          <input type="text" name="address" placeholder="Address*" />
        </div>
        {/* --------------------- third grid ----------------*/}
        <div className={classes.thirdGrid}>
          <input type="text" name="city" placeholder="City" />
          <input
            type="number"
            name="telephone"
            placeholder="Telephone"
            minLength="10"
          />
          <input type="text" name="nextkin" placeholder="Nextkin" />
          <select name="bloodGroup">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>o+</option>
            <option>o-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>
        {/* --------------------- fourth grid ----------------*/}
        <div className={classes.fourthGrid}>
          <input type="text" name="fatherName" placeholder="Father Name" />
          <input type="text" name="motherName" placeholder="Mother Name" />
          <input type="text" name="taxNumID" placeholder="Tax Number ID" />
        </div>
        <div className={classes.fifthGrid}>
          <div>Note</div>
          <div>
            <textarea name="patNote"></textarea>
          </div>
        </div>
        {/* --------------------- sixth grid ----------------*/}

        <div className={classes.sixthGrid}>
          <Link to="..">
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const dataToSend = {
    firstName: data.get("firstName"),
    lastName: data.get("secondName"),
    age: data.get("age"),
    patSex: data.get("gender"),
    address: data.get("address"),
    city: data.get("city"),
    telephone: data.get("telephone"),
    nextKin: data.get("nextkin"),
    bloodType: data.get("bloodGroup"),
    fatherName: data.get("fatherName"),
    motherName: data.get("motherName"),
    taxCode: data.get("taxNumID"),
    patNote: data.get("patNote"),
    timeStamp: new Date().toISOString(),
  };
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
  console.log(dataToSend);
  return dataToSend;
}

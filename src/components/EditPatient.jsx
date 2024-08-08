import classes from "./AddPatient.module.css";
import { Form, redirect, useRouteLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "./PatientLayout/url";

export default function EditPatient() {
  const patientDataToEdit = useRouteLoaderData("patientData");
  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.patientText}>Edit Patient</div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Edit
        Patient
      </div>
      <Form method="post">
        {/* ---------------------first grid ----------------*/}
        <div className={classes.firstGrid}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            name="secondName"
            nameplaceholder="Last Name*"
            required
          />
        </div>
        {/* --------------------- second grid ----------------*/}
        <div className={classes.secondGrid}>
          <input
            type="number"
            name="age"
            defaultValue={patientDataToEdit.age}
            className={classes.firstGridInp}
            required
          />

          <div>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male"> Male </label>

            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female"> Female </label>
          </div>

          <input
            type="text"
            name="address"
            defaultValue={patientDataToEdit.address}
            required
          />
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
          <Link to="/dashboard">
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
  console.log(dataToSend);
  try {
    const response = await fetch(`${url}/Patient/registerPatient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    console.log(response);
    return redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
}

/*export async function loader({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  const patId = param.patientId;
  console.log(patId);
  try {
    const response = await fetch(`${url}/Patient/loadPatient`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ patId: patId }),
    });
    const resData = await response.json();
    console.log(resData);
    return resData;
  } catch (err) {
    console.log(err);
    return err;
  }
}*/

import { Link, Form, json, redirect } from "react-router-dom";
import classes from "./AddMedicine.module.css";
import { url } from "./PatientLayout/url";
export default function AddMedicine() {
  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.patientText}>Add Medicine</div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link> /&nbsp;
        <Link to="/dashboard/medicine"> Medicines</Link>&nbsp; / &nbsp; Add
        Medicine
      </div>
      {/* ---- first ----------*/}
      <Form method="post">
        <div method="post" className={classes.firstGrid}>
          <select name="medicineCode">
            <option>Select Medicine Code</option>
            <option>O123</option>
            <option>AB234</option>
            <option>ABC345</option>
          </select>
          <select id="second" name="medicineCatagory">
            <option>Select Medicine Catagory</option>
            <option>NJ</option>
            <option>OL</option>
            <option>SR</option>
            <option>TB</option>
          </select>
        </div>
        {/* ---- first ----------*/}
        <div className={classes.secondGrid}>
          <input
            type="text"
            name="medicineShortDesc"
            placeholder="Medicine Short Desc."
          ></input>
          <input
            type="text"
            id="sec"
            name="displayOrder"
            placeholder="Medicine Display Order"
          ></input>
        </div>
        <div className={classes.thirdGrid}>
          <div>
            <input
              type="text"
              name="medicineLongDesc"
              placeholder="Medicine Long Desc."
            />
          </div>

          <div className={classes.thirdGridElem}>
            <p>Medicine Display Side:</p>&nbsp;&nbsp;
            <div>
              <input type="radio" name="direction" value="right" />{" "}
              Right&nbsp;&nbsp;
            </div>
            <div>
              <input type="radio" name="direction" value="left" />
              Left &nbsp;
            </div>
          </div>
          <br />
        </div>
        <div className={classes.sixthGrid}>
          <Link to="..">
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Add Medicine</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const dataToSend = {
    disOrder: data.get("displayOrder"),
    longDesc: data.get("medicineLongDesc"),
    medCat: data.get("medicineCatagory"),
    medCode: data.get("medicineCode"),
    medSide: data.get("direction"),
    shortDesc: data.get("medicineShortDesc"),
  };
  console.log(dataToSend);
  const response = await fetch(`${url}/Medicine/addMedicine`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  return response.json(), redirect("/dashboard/medicine");
}

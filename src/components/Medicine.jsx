import { Link, useLoaderData } from "react-router-dom";
import classes from "./Medicine.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
export default function Medicine() {
  const medicineList = useLoaderData();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Medicine</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <Link to="/dashboard/add-medicine">
            <button className={classes.roundedButton}>Add Medicine</button>
          </Link>
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp;
        Medicine
      </div>
      <br />
      &nbsp;
      <span style={{ color: "orange" }}>Medicine List</span>
      <table>
        <thead>
          <tr>
            <td>SR No.</td>
            <td>Code</td>
            <td>Category</td>
            <td>Short Desc</td>
            <td>Long Desc</td>
            <td>Disp. Order</td>
            <td>Side</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {medicineList.map((data) => (
            <tr key={data.SrNo}>
              <td>{data.SrNo}</td>
              <td>{data.code}</td>
              <td>{data.category}</td>
              <td>{data.shortDesc}</td>
              <td>{data.LongDesc}</td>
              <td>{data.dispOrder}</td>
              <td>{data.side}</td>
              <td>
                <FaEdit style={{ color: "#007bff" }} />
                &nbsp; &nbsp;
                <RiDeleteBin6Line style={{ color: "red" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:3002/HMS/getMedicineData");
  console.log("data Fetched");
  const resData = response.json();
  console.log(resData);
  return resData;
}

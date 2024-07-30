import classes from "./IPD_Register.module.css";
import { Link } from "react-router-dom";
export default function IPD_Register() {
  return (
    <div>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>IPD Register</div>
        <div style={{ flexGrow: 2 }}></div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; IPD
        Register
      </div>
      <p className={classes.paragraph}>Nothing found to display</p>
    </div>
  );
}

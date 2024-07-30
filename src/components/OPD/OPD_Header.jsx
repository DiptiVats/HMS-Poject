import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import classes from "./OPD_Header.module.css";
export default function OPD_Header() {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerElem1}>
        <div className={classes.headerElem1_part1}>OPD</div>
        <div className={classes.headerElem1_part2}>
          <Link to="/dashboard">Sri Krishna Hospital</Link>&nbsp; / &nbsp;OPD
        </div>
      </div>
      <div className={classes.headerElem2}>
        <div>Ravi Yadav | 32 Yrs | Male </div>
        <p>
          Privious Note <BsExclamationCircle className={classes.icon} />
        </p>
      </div>
      <div className={classes.headerElem3}>
        <p>OPD No.</p>
        <input type="number" placeholder="Enter OPD no." />
      </div>
      <div className={classes.headerElem3}>
        <p>Attendance</p>
        <input type="text" value="20-Jan-2020" />
      </div>
      <div className={classes.headerElem3}>
        <p>Last Visit Date</p>
        <input type="text" value="20-Jan-2020" />
      </div>
    </div>
  );
}

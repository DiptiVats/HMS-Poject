import { Link } from "react-router-dom";
import classes from "./Reprint.module.css";
export default function Reprint() {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Reprint Discharge</div>
        <div style={{ flexGrow: 2 }}></div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Reprint
        Discharge
      </div>
      {/*---------- first grid --------------- */}
      <div className={classes.firstGrid}>
        <div className={classes.firstGridElem}>
          <div>From</div>
          <div>
            <input type="date" />
          </div>
        </div>
        <div className={classes.firstGridElem}>
          <div>To</div>
          <div>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className={classes.firstGrid}>
        <div className={classes.firstGridElem}>
          <div>On Account Of</div>
          <div>
            <select type="date">
              <option>Select Treatment Type</option>
              <option>OPD</option>
              <option>X-RAY</option>
              <option>Psysiotherapy</option>
              <option>Minor</option>
              <option>Emergency</option>
            </select>
          </div>
        </div>
        <div className={classes.firstGridElem}>
          <div>Operation</div>
          <div>
            <select type="date">
              <option>SELECT</option>
              <option>DELETE</option>
              <option>EDIT</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button className={classes.submitButton}>Submit</button>
      </div>
    </div>
  );
}

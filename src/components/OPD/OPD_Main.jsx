import OPD_Header from "./OPD_Header";
import classes from "./OPD_Main.module.css";
export default function OPD_Main() {
  return (
    <div className={classes.opdWrapper}>
      <OPD_Header />
      <div>
        <div>
          <p>Notes</p>
        </div>
        <div>
          <p>Diagnosis</p>
        </div>
        <div>
          <p>Treatment</p>
        </div>
      </div>
    </div>
  );
}

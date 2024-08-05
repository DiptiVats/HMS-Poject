import OPD_Header from "./OPD_Header";
import classes from "./OPD_Main.module.css";
export default function OPD_Main() {
  return (
    <div className={classes.opdWrapper}>
      <OPD_Header />
      <div className={classes.opdMainWrapper}>
        <div className={classes.firstWrapper}>
          <p>Notes</p>
          <div></div>
        </div>
        <div className={classes.secondWrapper}>
          <p>Diagnosis</p>
          <div></div>
        </div>
        <div className={classes.thirdWrapper}>
          <p>Treatment</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

import classes from "./TopRightNav.module.css";
import { CiMail } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GrPowerShutdown } from "react-icons/gr";
export default function TopRightNav() {
  return (
    <div className={classes.buttonWrapper}>
      <button className={classes.buttonIcon}>
        <CiMail />
      </button>
      <button className={classes.buttonIcon}>
        <GoBell />
      </button>
      <div style={{ flexGrow: 1 }}></div>
      <button className={classes.buttonIcon}>
        <IoIosSearch />
      </button>
      <button className={classes.buttonIcon}>
        <Link to="/" className={classes.logoutButton}>
          <GrPowerShutdown />
        </Link>
      </button>
    </div>
  );
}

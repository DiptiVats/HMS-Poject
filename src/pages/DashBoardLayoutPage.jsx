import classes from "./DashBoardLayoutPage.module.css";
import ohLogo from "../assets/oh_logo.jpg";
import TopRightNav from "../components/DashboardLayoutComps/TopRightNav";
import SideBar from "../components/DashboardLayoutComps/SideBar/SideBar";
import { Outlet } from "react-router";

export default function DashBoardLayoutPage() {
  return (
    <>
      <div className={classes.mainNavWrapper}>
        <div className={classes.firstPartition}>
          <div className={classes.topLeftNav}>
            <img src={ohLogo} className={classes.topLeftImg} />
          </div>
          <div className={classes.bottomLeftNav}>
            <SideBar />
          </div>
        </div>
        <div className={classes.secondPartition}>
          <div className={classes.topRightNav}>
            <TopRightNav />
          </div>

          <div className={classes.bottomRightNav}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

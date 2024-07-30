import { RiArrowDropDownFill } from "react-icons/ri";
import classes from "./SideBar.module.css";
import userImg from "../../../assets/user.png";
import SideBarBottom from "./SideBarBottom";
export default function SideBar() {
  return (
    <>
      <div className={classes.topSideBar}>
        <div>
          <img src={userImg} className={classes.userImg} />
        </div>
        <div className={classes.userName}>
          <span>Welcom,</span>
          <span>
            <b>
              Anil Yadav <RiArrowDropDownFill className={classes.dropdown} />
            </b>
          </span>
        </div>
      </div>

      {/*  ---------------------------------------------  */}
      <div className={classes.bottomSideBar}>
        <span>Main</span>
        <SideBarBottom />
      </div>
    </>
  );
}

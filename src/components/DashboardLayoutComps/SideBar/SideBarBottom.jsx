import { BiSolidPrinter } from "react-icons/bi";
import { GoFile } from "react-icons/go";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import classes from "./SideBarBottom.module.css";
import { NavLink } from "react-router-dom";
import DorpDownList from "./DropDownList";
import { useState } from "react";
export default function SideBarBottom() {
  const [togglePatient, settogglePatient] = useState(true);
  const [toggleMedicine, settoggleMedicine] = useState(false);

  function handleToggleMedicineDropdown() {
    settoggleMedicine((prevState) => !prevState);
  }
  function handleTogglePatientDropdown() {
    settogglePatient((prevState) => !prevState);
  }
  return (
    <div className={classes.mainDiv}>
      <div className={classes.section}>
        <div className={classes.personIcon}>
          <IoPersonOutline
            className={togglePatient ? classes.bgColor : classes.sideBarIcon}
          />
        </div>
        <div
          onClick={handleTogglePatientDropdown}
          className={togglePatient ? classes.textColor : undefined}
        >
          Patient
        </div>

        <DorpDownList
          text1="Patient Dashboard"
          text2="Add Patient"
          isClick={togglePatient}
          link1="/dashboard"
          link2="/dashboard/add-patient"
          link3="OPD"
        />
      </div>
      <div className={classes.section}>
        <div className={classes.medicineIcon}>
          <HiOutlineRocketLaunch
            className={toggleMedicine ? classes.bgColor : classes.sideBarIcon}
          />
        </div>
        <div
          onClick={handleToggleMedicineDropdown}
          className={toggleMedicine ? classes.textColor : undefined}
        >
          Medicine
        </div>

        <DorpDownList
          text1="Medicine Dashboard"
          text2="Add Medicine"
          isClick={toggleMedicine}
          link1="medicine"
          link2="add-medicine"
          link3="OPD"
        />
      </div>
      <NavLink
        to="ipd-register"
        className={({ isActive }) =>
          isActive ? `${classes.section} ${classes.activeNav}` : classes.section
        }
        end
      >
        <div>
          <GoFile className={classes.sideBarIcon} />
        </div>
        <div>IPD Register</div>
      </NavLink>

      <NavLink
        to="/dashboard/payment-register"
        className={({ isActive }) =>
          isActive ? `${classes.section} ${classes.activeNav}` : classes.section
        }
        end
      >
        <div>
          <GoFile className={classes.sideBarIcon} />
        </div>
        <div>Paymnent Register</div>
      </NavLink>
      <NavLink
        to="/dashboard/reprint"
        className={({ isActive }) =>
          isActive ? `${classes.section} ${classes.activeNav}` : classes.section
        }
        end
      >
        <div>
          <BiSolidPrinter className={classes.sideBarIcon} />
        </div>
        <div>Reprint</div>
      </NavLink>
    </div>
  );
}

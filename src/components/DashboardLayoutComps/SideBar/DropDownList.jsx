import { NavLink } from "react-router-dom";
import classes from "./DropDownList.module.css";
export default function DorpDownList({
  text1,
  text2,
  isClick,
  link1,
  link2,
  link3,
}) {
  return (
    <>
      <ul
        className={classes.unorderdLists}
        type="none"
        style={{
          display: isClick ? "block" : "none",
          transitionDuration: "1s",
        }}
      >
        <li className={classes.list}>
          <hr className={classes.horizontalRow} />
          <NavLink
            to={link1}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.links
            }
            end
          >
            {text1}
          </NavLink>
        </li>

        <li className={classes.list}>
          <hr className={classes.horizontalRow} />
          <NavLink
            to={link2}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.links
            }
          >
            {text2}
          </NavLink>
        </li>

        <li className={classes.list}>
          <hr className={classes.horizontalRow} />
          <NavLink
            to={link3}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.links
            }
          >
            {link3}
          </NavLink>
        </li>
      </ul>
    </>
  );
}

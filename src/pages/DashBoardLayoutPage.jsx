import classes from "./DashBoardLayoutPage.module.css";
import ohLogo from "../assets/oh_logo.jpg";
import TopRightNav from "../components/DashboardLayoutComps/TopRightNav";
import SideBar from "../components/DashboardLayoutComps/SideBar/SideBar";
import { Outlet, redirect } from "react-router";
import { url } from "../components/PatientLayout/url";
import { getAuthToken } from "../util/auth";
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

export async function loader({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  console.log(param);
  // --------- getting auth token ------------------------
  const accessToken = getAuthToken();

  let Url = `${url}/Patient/loadAllPatient`;
  let Body = {
    accessToken: accessToken,
  };

  // ------------ checking if there is any searchParams -----------
  if (param.patId) {
    Url = `${url}/Patient/loadPatient`;
    Body = {
      ...param,
      accessToken: accessToken,
    };
    console.log("sending data to of a specific person");
  }

  console.log(accessToken);
  // ------- try block -------------
  try {
    const response = await fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(Body),
    });

    console.log(response);
    const resData = await response.json();
    if (response.status !== 200) {
      console.log("response is not ok");
    }
    return resData;
  } catch (err) {
    console.log(err);
    return err;
  }
}

/*export async function loader() {
  try {
    const response = await fetch(`${url}/Patient/loadAllPatient `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    });
    const resData = await response.json();
    console.log(resData);
    return resData;
  } catch (err) {
    return err;
  }
}
*/

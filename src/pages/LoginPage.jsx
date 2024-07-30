import classes from "./LoginPage.module.css";
import { IoIosLock } from "react-icons/io";
import ohLogo from "../assets/oh_logo.jpg";
import { motion } from "framer-motion";
import { Link, Form, redirect } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function LoginPage() {
  /* const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    );
  };*/
  return (
    <>
      <div className={classes.barPattern}>
        <span className={classes.red}></span>
        <span className={classes.indigo}></span>
        <span className={classes.blue}></span>
        <span className={classes.green}></span>
        <span className={classes.orange}></span>
      </div>

      <div className={classes.mainAuth}>
        <motion.div
          className={classes.popup}
          initial={{ scale: 0.3, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0.6 }}
        >
          <div>
            <img src={ohLogo} alt="logo" className={classes.logoImg} />
          </div>
          <div>
            <Form method="post" className={classes.loginForm}>
              <h1 className={classes.formText}>Login to your account</h1>
              <div>
                <input
                  type="text"
                  name="username"
                  className={classes.inpFields}
                  placeholder="user@domain.com"
                />
              </div>
              <div className={classes.formPassword}>
                <input
                  type="password"
                  name="password"
                  className={classes.inpFields}
                  placeholder="password"
                />
              </div>
              <div>
                <select name="role" className={classes.formOption}>
                  <option>Login as hospital</option>
                  <option>Login as Receptionsist</option>
                </select>
              </div>

              <div className={classes.formCheckbox}>
                &nbsp;
                <input
                  type="checkbox"
                  name="rememberMe"
                  className={classes.inpCheckbox}
                />
                Remember me
              </div>
              <button className={classes.formButton}>LOGIN</button>
              <p>
                <IoIosLock className={classes.icon} />
                <Link to="" id={classes.forgotLink}>
                  &nbsp;Forgot password
                </Link>
              </p>
              <p className={classes.formText3}>
                Don't have an account?
                <Link to="" id={classes.registerLink}>
                  &nbsp;Register
                </Link>
              </p>
            </Form>
          </div>
        </motion.div>
      </div>
    </>
  );
}

/*export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return redirect("/dashboard");
  } catch (err) {
    console.error(err);
  }
  return null;
}
export async function loader() {
  const data = await request.formData();
  const dataToSend = {
    name: data.get("userName"),
    password: data.get("password"),
  };
  console.log(dataToSend);
  const response = await fetch("http://localhost:3002/Auth/loginAuth");
  console.log("sending");
  if (!response.ok) {
    throw new Error("Faild to fetch data");
  }
  const resData = await response.json();
  console.log(resData);

  return redirect("dashboard");
}*/

export async function action({ request }) {
  const data = await request.formData();

  const dataToSend = {
    username: data.get("username"),
    password: data.get("password"),
  };
  console.log("Data to send");
  console.log(dataToSend);
  try {
    const response = await fetch(
      "https://dc68-2401-4900-1c0b-31ff-e8b2-1a4f-3522-a1d3.ngrok-free.app/authentication/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );
    console.log(dataToSend);
    console.log(token);
    if (response.ok) {
      return redirect("/dashboard");
    }
    return response;
  } catch (err) {
    console.log(err);
  }
  return null;
}

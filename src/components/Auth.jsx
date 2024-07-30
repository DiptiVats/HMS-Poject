import { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Auth() {
  const email = useRef(null);
  const password = useRef(null);

  async function handleSubmit() {
    await createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    );
  }

  return (
    <div>
      <input type="email" placeholder="email" ref={email} />
      <input type="password" placeholder="password" ref={password} />
      <button onClick={handleSubmit}>sign in </button>
    </div>
  );
}

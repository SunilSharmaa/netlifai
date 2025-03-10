import { useRef, useState } from "react";
import validateCredential from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const setSignInSignUp = () => {
    setErrorMessage(null);
    setIsSignIn(!isSignIn);
  };

  const onSubmitForm = (userName, email, password) => {
    let message = validateCredential(
      userName?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "-", errorMessage);
          setErrorMessage(errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email, "logged in successfully");
        //   navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "----");
          setErrorMessage(errorCode);
        });
    }
  };
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
        alt="background image"
        className="h-screen w-full"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <form
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-100 bg-black/70 px-12 py-12 rounded"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-white font-bold text-2xl mb-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={userName}
            className="text-white bg-gray-800 py-2 pl-4 pr-2 w-full rounded focus:outline-none"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="text-white bg-gray-800 py-2 pl-4 pr-2 w-full rounded focus:outline-none mt-4"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="text-white mt-4 bg-gray-800 py-2 pl-4 pr-2 w-full rounded focus:outline-none"
          type="password"
          placeholder="Password"
        />
        {errorMessage !== null && (
          <p className="text-red-600 mt-4">{errorMessage}</p>
        )}
        <button
          onClick={() => onSubmitForm(userName, email, password)}
          className="text-white bg-red-600 w-full mt-14 p-2 rounded cursor-pointer"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-white mt-6 inline-block">
          {isSignIn ? "New to Netlifai?" : "Already user?"}{" "}
        </span>
        <span
          className="text-white hover:underline cursor-pointer"
          onClick={setSignInSignUp}
        >
          {" "}
          {isSignIn ? "Sign up now" : "Sign In"}
        </span>
      </form>
    </div>
  );
};

export default Login;

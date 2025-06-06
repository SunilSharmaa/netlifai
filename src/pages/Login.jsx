import { useRef, useState } from "react";
import validateCredential from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
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
          updateProfile(auth.currentUser, {
            displayName: userName?.current?.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
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
    <div className="relative h-[100dvh] w-full">
      <img
        src={BACKGROUND_IMAGE_URL}
        alt="background image"
        className="h-[100dvh] w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black opacity-85 sm:opacity-60"></div>

      <form
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-full  px-12 sm:py-20 sm:w-120 sm:bg-black/80 sm:rounded-lg sm:top-[20%]"
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

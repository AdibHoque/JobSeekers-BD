import {createContext, useEffect, useState} from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function errorAlert(err) {
  MySwal.fire({
    position: "center",
    icon: "error",
    text: err,
    showConfirmButton: false,
    timer: 5000,
  });
}

const firebaseErrorMessages = [
  {
    code: "auth/email-already-in-use",
    message: "The email address is already in use by another account.",
  },
  {
    code: "auth/invalid-email",
    message:
      "The email address is invalid. Please enter a valid email address.",
  },
  {
    code: "auth/user-not-found",
    message: "User not found. Please check your email and try again.",
  },
  {
    code: "auth/wrong-password",
    message: "Incorrect password. Please try again.",
  },
  {
    code: "auth/weak-password",
    message: "The password is too weak. Please choose a stronger password.",
  },
  {
    code: "auth/user-disabled",
    message:
      "Your account has been disabled. Please contact support for assistance.",
  },
  {
    code: "auth/network-request-failed",
    message:
      "A network error has occurred. Please check your internet connection and try again.",
  },
  {
    code: "auth/invalid-credential",
    message: "The provided credential is invalid. Please check and try again.",
  },
  {
    code: "auth/operation-not-allowed",
    message:
      "This operation is not allowed. Please contact support for assistance.",
  },
  {
    code: "auth/timeout",
    message: "The operation timed out. Please try again later.",
  },
  {
    code: "auth/missing-verification-code",
    message: "A verification code is required.",
  },
  {
    code: "auth/invalid-verification-code",
    message: "The verification code is invalid. Please check and try again.",
  },
  {
    code: "auth/invalid-phone-number",
    message: "The phone number is invalid. Please enter a valid phone number.",
  },
  {
    code: "auth/requires-recent-login",
    message:
      "This operation requires recent authentication. Please sign in again and try again.",
  },
  {
    code: "auth/captcha-check-failed",
    message: "Captcha verification failed. Please try again.",
  },
  {
    code: "auth/account-exists-with-different-credential",
    message:
      "An account already exists with the same email address but different sign-in credentials. Please sign in using a provider associated with this email address.",
  },
];

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, username, photo) => {
    setLoading(true);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const isValid = passwordRegex.test(password);
    if (!isValid) {
      errorAlert(
        "The password is too weak. Please include a Uppercase & Lowercase letter and it must be at least 6 characters in total."
      );
      return setErrorMessage(
        "The password is too weak. Please include a Uppercase & Lowercase letter and it must be at least 6 characters in total."
      );
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (username && photo) {
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: photo,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log(error);
              // An error occurred
              // ...
            });
        }

        setUser(userCredential.user);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );
        errorAlert(errorMessageObj ? errorMessageObj.message : "Unkown Error");
        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
        setLoading(false);
      });
  };
  const logIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );
        errorAlert(errorMessageObj ? errorMessageObj.message : "Unkown Error");
        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
        setLoading(false);
      });
  };
  const googleLogIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );

        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
        errorAlert(errorMessageObj ? errorMessageObj.message : "Unkown Error");
        // ...
        setLoading(false);
      });
  };
  const githubLogIn = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );

        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
        errorAlert(errorMessageObj ? errorMessageObj.message : "Unkown Error");
        setLoading(false);
        // ...
      });
  };
  const logOut = () => {
    setLoading(true);
    MySwal.fire({
      title: "Logout?",
      text: "You will need to Login again if you Logout, so make sure you remember your account credentials.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire({
          title: "Logged Out!",
          text: "Your account is signed out.",
          icon: "success",
        });
      } else {
        setLoading(false);
      }
    });
  };
  const profileUpdate = (username, photo) => {
    updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    })
      .then(() => {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Profile Updated!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );
        console.log(error.code);
        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("User Auth chnaged", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    errorMessage,
    createUser,
    logOut,
    logIn,
    googleLogIn,
    githubLogIn,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

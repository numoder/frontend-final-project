// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcjISnlDpAhSjjTt-Wks0Rkbd20IIZRls",
  authDomain: "explr-couture-wrld.firebaseapp.com",
  projectId: "explr-couture-wrld",
  storageBucket: "explr-couture-wrld.appspot.com",
  messagingSenderId: "220187623950",
  appId: "1:220187623950:web:05cd098df700d1d50c325f"
};

export default function Login() {
  const handleSignIn = () => {
    // firebase
    const app = initializeApp(firebaseConfig)
    // authentication
    const auth = getAuth(app)
    // provider
    const provider = new GoogleAuthProvider()
    // signin window
    signInWithPopup(auth, provider)
      .then(() => setIsLoggedIn(true))
      .catch(alert)
  }
  return (
    <>
      <h1>LOGIN</h1>
    </>
  )
}

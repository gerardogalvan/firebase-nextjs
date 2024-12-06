import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiz6jac6fcdyKSAViurvQ_38a11Mo7Mbg",
  authDomain: "test-1-8aea3.firebaseapp.com",
  projectId: "test-1-8aea3",
  storageBucket: "test-1-8aea3.firebasestorage.app",
  messagingSenderId: "47699253125",
  appId: "1:47699253125:web:33aa2012bf715957a5d6ec",
  measurementId: "G-H639V0YCEX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = result.user;

    window.alert(`Signed in with ${user.email}`);
  } catch (e) {
    window.alert(e.message);
  }
};

export const signOutFromGoogle = async () => {
  try {
    await signOut(auth);

    window.alert("Signed out!");
  } catch (e) {
    window.alert(e.message);
  }
};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeZN0RQOoFYYZl1bcoHhLj4trfRvErjtw",
  authDomain: "todolist-f052b.firebaseapp.com",
  projectId: "todolist-f052b",
  storageBucket: "todolist-f052b.appspot.com",
  messagingSenderId: "111597502365",
  appId: "1:111597502365:web:4486a24bdc711bdd40f974",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

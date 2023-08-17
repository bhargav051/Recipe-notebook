import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnEJWqMPMQvalDSO6HlB_DaekYtUc8fls",
  authDomain: "recipe-11db3.firebaseapp.com",
  projectId: "recipe-11db3",
  storageBucket: "recipe-11db3.appspot.com",
  messagingSenderId: "260945485304",
  appId: "1:260945485304:web:b41ed7c1bace0905034a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
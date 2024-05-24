import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCg3vvfhPzOUJYVAFVxlGxJZUVlFJOVSQ",
  authDomain: "quickflame.firebaseapp.com",
  projectId: "quickflame",
  storageBucket: "quickflame.appspot.com",
  messagingSenderId: "89993149973",
  appId: "1:89993149973:web:d10642101ed2c0a7b2581c",
  measurementId: "G-228DR8SJN2",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

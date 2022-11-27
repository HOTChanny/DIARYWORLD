// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 코드 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMVt2A_hKH8xyhsVaEN7y9qsp2QXfm0IA",
  authDomain: "mysite-dc26b.firebaseapp.com",
  projectId: "mysite-dc26b",
  storageBucket: "mysite-dc26b.appspot.com",
  messagingSenderId: "695730952351",
  appId: "1:695730952351:web:66708d26397ca27516eaaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 코드 추가
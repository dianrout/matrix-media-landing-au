import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtd_W0fcu8iytrjK6CFT12S2AuhOZIzbc",
  authDomain: "matrix-bcea5.firebaseapp.com",
  projectId: "matrix-bcea5",
  storageBucket: "matrix-bcea5.appspot.com",
  messagingSenderId: "355059492756",
  appId: "1:355059492756:web:de56e759d0004f06285181",
  measurementId: "G-8VNMHXJ41Z"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW1MDeVKX6_1GyGtuwPuxSU34TTvh4sTw",
  authDomain: "react-native-fooddash-app.firebaseapp.com",
  projectId: "react-native-fooddash-app",
  storageBucket: "react-native-fooddash-app.appspot.com",
  messagingSenderId: "949504948317",
  appId: "1:949504948317:web:aa3c6e8e3d3c739b4475b4",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { firebase, db };

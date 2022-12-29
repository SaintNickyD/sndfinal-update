import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIKuqjuJKOusUI5KLowx7_yEKODMp9r0M",
  authDomain: "snd-final.firebaseapp.com",
  databaseURL: "https://snd-final-default-rtdb.firebaseio.com",
  projectId: "snd-final",
  storageBucket: "snd-final.appspot.com",
  messagingSenderId: "768544005407",
  appId: "1:768544005407:web:f76bb1eb2ebfd717ebe42a"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();




export { db, auth };
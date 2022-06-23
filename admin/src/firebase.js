import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-baf51.firebaseapp.com",
  projectId: "netflix-baf51",
  storageBucket: "netflix-baf51.appspot.com",
  messagingSenderId: "207636882439",
  appId: "1:207636882439:web:43578aff957e366bb776a2",
  measurementId: "G-TFM5PZ90V8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

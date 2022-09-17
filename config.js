import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC4xuIweb8YtJwXsFcjKB1DFLpcu-hE9oE",
  authDomain: "student-attendance-app-596e9.firebaseapp.com",
  databaseURL: "https://student-attendance-app-596e9-default-rtdb.firebaseio.com",
  projectId: "student-attendance-app-596e9",
  storageBucket: "student-attendance-app-596e9.appspot.com",
  messagingSenderId: "242457877685",
  appId: "1:242457877685:web:dfb1ff6a90762cec08f2fc"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  
import Rebase from "re-base";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBuVXBZ2A9fBDx2EwG5CFWUnpXXsm7b3Jk",
        authDomain: "catch-of-the-day-tebogo-goqo.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-tebogo-goqo-default-rtdb.firebaseio.com",
      });

    const base = Rebase.createClass(firebaseApp.database());

      // This is a named export
    export { firebaseApp };

    //this is a default export
    export default base;
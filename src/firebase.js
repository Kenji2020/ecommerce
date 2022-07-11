import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRMBuMnF94H5oZ4PIU5f7fmawvspawFik",
    authDomain: "ecommerce-31130.firebaseapp.com",
    projectId: "ecommerce-31130",
    storageBucket: "ecommerce-31130.appspot.com",
    messagingSenderId: "1060233542202",
    appId: "1:1060233542202:web:1dc273b17bbb221efe9303"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};


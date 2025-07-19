// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: window.env?.FIREBASE_API_KEY,
  authDomain: window.env?.FIREBASE_AUTH_DOMAIN,
  databaseURL: window.env?.FIREBASE_DATABASE_URL,
  projectId: window.env?.FIREBASE_PROJECT_ID,
  storageBucket: window.env?.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.env?.FIREBASE_MESSAGING_SENDER_ID,
  appId: window.env?.FIREBASE_APP_ID,
  measurementId: window.env?.FIREBASE_MEASUREMENT_ID
};

// Optional: Warn if any config value is missing
Object.entries(firebaseConfig).forEach(([key, value]) => {
  if (!value) {
    console.warn(`Firebase config missing: ${key}`);
  }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
console.log("Connected to Firebase!!!");

export {auth, app, db, provider}
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SERVER_API_KEY,
  authDomain: process.env.REACT_APP_SERVER_AUTH,
  projectId: process.env.REACT_APP_SERVER_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SERVER_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SERVER_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_SERVER_APP_ID
};

initializeApp(firebaseConfig);
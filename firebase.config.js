
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQArZCTyIEgowUSYiwJyhfamuLvcXmMj4",
  authDomain: "chatting-app-d023d.firebaseapp.com",
  projectId: "chatting-app-d023d",
  storageBucket: "chatting-app-d023d.firebasestorage.app",
  messagingSenderId: "797100820671",
  appId: "1:797100820671:web:2569c2940f9185eed69e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig
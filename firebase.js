import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDt1YC4Pyg6LDCKes-DyPmr0e1Q3Id8gik",
  authDomain: "recipetable-e04ad.firebaseapp.com",
  projectId: "recipetable-e04ad",
  storageBucket: "recipetable-e04ad.firebasestorage.app",
  messagingSenderId: "1083663716600",
  appId: "1:1083663716600:web:a1fc5427941dfb6862eb0d",
  measurementId: "G-SYSPLQDZV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
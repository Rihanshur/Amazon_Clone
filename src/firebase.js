import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjEuDdeZHK8CkSfSmos7d-cQSN7lEgOHo",
  authDomain: "clone-ea79d.firebaseapp.com",
  projectId: "clone-ea79d",
  storageBucket: "clone-ea79d.appspot.com",
  messagingSenderId: "394171741935",
  appId: "1:394171741935:web:28a6b70138bb5e28b6cd1a",
  measurementId: "G-PGQTMSYGSE"
};
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



export { auth,signInWithEmailAndPassword ,createUserWithEmailAndPassword  };

  
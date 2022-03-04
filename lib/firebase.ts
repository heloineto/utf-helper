const firebaseConfig = {
  apiKey: 'AIzaSyDFSCILjbvGDlhp6xojOv9l4T3g7Azj5k4',
  authDomain: 'diet-manager-co.firebaseapp.com',
  projectId: 'diet-manager-co',
  storageBucket: 'diet-manager-co.appspot.com',
  messagingSenderId: '385439945857',
  appId: '1:385439945857:web:25e2ebea6a9caab1ebe980',
  measurementId: 'G-Q6EGJ1FSS8',
};

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const googleAuthProvider = new GoogleAuthProvider();

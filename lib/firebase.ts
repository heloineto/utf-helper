const firebaseConfig = {
  apiKey: 'AIzaSyAPi1R5c394h_isjcTeP1nNBczS_YEKcCw',
  authDomain: 'utf-helper.firebaseapp.com',
  projectId: 'utf-helper',
  storageBucket: 'utf-helper.appspot.com',
  messagingSenderId: '589169894545',
  appId: '1:589169894545:web:d8a9a444382577ebaecb30',
  measurementId: 'G-9BYMN6J2W7',
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

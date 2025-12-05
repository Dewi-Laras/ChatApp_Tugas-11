import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  CollectionReference,
  DocumentData,
  // --- BARU: Tambahkan impor Firestore berikut ---
  doc, 
  getDoc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Konfigurasi Firebase (Gunakan konfigurasi Anda yang sudah ada)
const firebaseConfig = {
  apiKey: "AIzaSyB_YOUR_OWN_API_KEY_HERE_sK3q8",
  authDomain: "my-new-chat-app.firebaseapp.com",
  projectId: "my-new-chat-app",
  storageBucket: "my-new-chat-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefg1234567890",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth dan Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Koleksi pesan
export const messagesCollection = collection(db, "messages") as CollectionReference<DocumentData>;

// Export fungsi Firebase yang sering digunakan
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  // --- BARU: Export fungsi Firestore berikut ---
  doc,
  getDoc,
  setDoc,
};

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
  apiKey: "AIzaSyBJw7SvXylBI9acjy898k__tjycsZ8Hdag",
  authDomain: "chatapp-cf44e.firebaseapp.com",
  projectId: "chatapp-cf44e",
  storageBucket: "chatapp-cf44e.firebasestorage.app",
  messagingSenderId: "179810251094",
  appId: "1:179810251094:web:5861a9b9f91d82c8ef26f7",
  measurementId: "G-CHNS6TPVMH"
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

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCRrIX7wN5XixioScYpGZ2-S7n8-CjAuVI",
  authDomain: "enjoytaxv2.firebaseapp.com",
  projectId: "enjoytaxv2",
  storageBucket: "enjoytaxv2.appspot.com",
  messagingSenderId: "968665410992",
  appId: "1:968665410992:web:f3cba5231d6ea0b00cfa75",
  measurementId: "G-1M44V4Q2Y5"
})

export const auth = app.auth()
export default app

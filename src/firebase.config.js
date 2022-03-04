import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkA3YpPPOTdhNN2CzSByEMB2adpgdDO1I",
    authDomain: "recipe-b5322.firebaseapp.com",
    projectId: "recipe-b5322",
    storageBucket: "recipe-b5322.appspot.com",
    messagingSenderId: "82998546398",
    appId: "1:82998546398:web:a487a9921012e2ec30974f"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
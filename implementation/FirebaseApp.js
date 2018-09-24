import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiVxnk_2-FyL5BkB72Oc6VFrL4MDCoFuM",
    authDomain: "swen325-assignment2.firebaseapp.com",
    databaseURL: "https://swen325-assignment2.firebaseio.com",
    projectId: "swen325-assignment2",
    storageBucket: "swen325-assignment2.appspot.com",
    messagingSenderId: "273802337274"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig);
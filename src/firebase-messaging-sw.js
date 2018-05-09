if ('function' === typeof importScripts) {
    importScripts("https://www.gstatic.com/firebasejs/4.7.0/firebase.js")
    importScripts("https://www.gstatic.com/firebasejs/4.7.0/firebase-messaging.js")
}

// Configurations for fcm
const config = {
    apiKey: "AIzaSyAmJ-Mfxx5E7x4vHc227C5B0IAAoOd7agU",
    authDomain: "openxorchat.firebaseapp.com",
    databaseURL: "https://openxorchat.firebaseio.com",
    projectId: "openxorchat",
    storageBucket: "openxorchat.appspot.com",
    messagingSenderId: "150881070054"
};

// Initialize Firebase 
firebase.initializeApp(config);
const messaging = firebase.messaging();
import firebase from "firebase";

let config = {
  apiKey: "AIzaSyBWk3fur0gj0umQq-5vXT10qRvgvOW7izM",
  authDomain: "react-movie-app-cc9d9.firebaseapp.com",
  databaseURL: "https://react-movie-app-cc9d9.firebaseio.com",
  projectId: "react-movie-app-cc9d9",
  storageBucket: "react-movie-app-cc9d9.appspot.com",
  messagingSenderId: "70150364865"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

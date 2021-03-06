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

export const writeCommentsData = (URL, setData) => {
  firebase
    .database()
    .ref(URL)
    .set(setData);
};
export const takeCommentsData = PATH => {
  return firebase
    .database()
    .ref(PATH)
    .on("value", snapshot => {
      return { data: snapshot.val() };
    });
};

export const addToFavorites = (URL, setObj) => {
  firebase
    .database()
    .ref(URL)
    .set(setObj);
};

export const deleteData = URL => {
  const dataRef = firebase.database().ref(URL);
  dataRef
    .remove()
    .then(() => {
      console.log("Remove succeeded.");
    })
    .catch(error => {
      console.log("Remove failed: " + error.message);
    });
};

export const editData = (URL, data) => {
  const dataRef = firebase.database().ref(URL);
  dataRef
    .update(data)
    .then(() => {
      console.log("Update succeeded.");
    })
    .catch(error => {
      console.log("Update failed: " + error.message);
    });
};

export const getDataFromDB = URL => {
  return firebase
    .database()
    .ref(URL)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
};

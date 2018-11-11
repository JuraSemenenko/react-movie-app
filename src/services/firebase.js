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

export const addToFavorites = (cookieUserId, contentType, id, liked) => {
  firebase
    .database()
    .ref("users/" + cookieUserId + "/favorites/" + contentType + "/" + id)
    .set({
      liked: !liked
    });
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

export const editData = () => {};

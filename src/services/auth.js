import firebase from "./firebase";

export const createUser = function(email, password) {
  if (email && password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    return firebase.auth().currentUser;
  }
};

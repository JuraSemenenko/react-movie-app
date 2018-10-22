import firebase from "./firebase";

export const signIn = (email, password) => {
  if (email && password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
};

export const logIn = function(email, password) {
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
  }
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      console.log("Sign-out successful.");
    });
};

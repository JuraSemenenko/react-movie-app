import firebase, { database } from "./firebase";

export const signIn = (email, password, name) => {
  if (email && password && name) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            dbUserAdd(user);
          });
        console.log("All fine");
        return true;
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("All bad(((");
        return false;
      });
  }
};

export const logIn = (email, password) => {
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

const dbUserAdd = user => {
  firebase
    .database()
    .ref("users/" + user.uid)
    .set({
      name: user.displayName
    });
};

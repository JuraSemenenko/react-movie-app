import firebase, { database } from "./firebase";

export const signIn = async (email, password, name) => {
  const signInInfo = {
    errors: null,
    success: false
  };
  if (email && password && name) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log("value = ", value.user, value.user.uid);
        //let user = firebase.auth().currentUser;
        value.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            dbUserAdd(value.user);
          });
        signInInfo.success = true;
      })
      .catch(error => {
        signInInfo.errors = {
          errorCode: error.code,
          errorMessage: error.message
        };
      });
  }
  return signInInfo;
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

const dbUserAdd = async user => {
  firebase
    .database()
    .ref("users/" + user.uid)
    .set({
      name: user.displayName
    });
};

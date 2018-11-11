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

export const logIn = async (email, password) => {
  const logInInfo = {
    success: true,
    errors: {}
  };
  if (email && password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        logInInfo.errors = {
          errorCode: error.code,
          errorMessage: error.message
        };
        logInInfo.success = false;
      });
  }
  return logInInfo;
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
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

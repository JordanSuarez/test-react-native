import firebase from "firebase";
import { AnyAction, Dispatch } from "redux";

import {
  USER_CLEAR_DATA,
  USER_LOGGED,
  USER_REGISTERED,
} from "../../constants/user";

export function clearData() {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: USER_CLEAR_DATA });
  };
}

export function userRegister(name: string, email: string, password: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser?.uid)
            .set({
              name,
              email,
            });
          // TODO dispatch toast success instead of user_registered
          dispatch({ type: USER_REGISTERED });
          resolve();
        })
        .catch((err) => /* TODO dispatch toast error */ console.log(err, reject))
    });
  };
}

export function userLogin(email: string, password: string) {
    // https://docs.expo.io/guides/authentication/#storing-data
  // return (dispatch: Dispatch<AnyAction>) => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(({ user }) => {
  //       console.log(res, email, password);
  //       firebase
  //         .firestore()
  //         .collection("users")
  //         .doc(firebase.auth().currentUser?.uid)
  //         .set({
  //           name,
  //           email,
  //         });
  //       const userData = {
  //         email: user.email,
  //       };
  //       dispatch({ type: USER_LOGGED, userData });
  //     });
  // };
}

// export function fetchUser() {
//   return (dispatch) => {
//     firebase
//       .firestore()
//       .collection("users")
//       .doc(firebase.auth().currentUser.uid)
//       .get()
//       .then((snapshot) => {
//         if (snapshot.exists) {
//           dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
//         } else {
//           console.log("does not exist");
//         }
//       });
//   };
// }
//
// export function fetchUserPosts() {
//   return (dispatch) => {
//     firebase
//       .firestore()
//       .collection("posts")
//       .doc(firebase.auth().currentUser.uid)
//       .collection("userPosts")
//       .orderBy("creation", "asc")
//       .get()
//       .then((snapshot) => {
//         const posts = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           const { id } = doc;
//           return { id, ...data };
//         });
//         dispatch({ type: USER_POSTS_STATE_CHANGE, posts });
//       });
//   };
// }

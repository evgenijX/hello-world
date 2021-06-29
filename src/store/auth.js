import firebase from "firebase/app";


export default {
  actions: {
    asyns login({dispatch, commit}, {email, password}){
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {

      }
    }
  }
}
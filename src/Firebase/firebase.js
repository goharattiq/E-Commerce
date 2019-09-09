import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyCClgAUZNw0D1JEYJdoPBBfbVKKtUH8I88",
    authDomain: "ecom-db-e22f8.firebaseapp.com",
    databaseURL: "https://ecom-db-e22f8.firebaseio.com",
    projectId: "ecom-db-e22f8",
    storageBucket: "",
    messagingSenderId: "106126011594",
    appId: "1:106126011594:web:b769015dc4190bc2fc9833"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
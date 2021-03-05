import firebase from 'firebase'


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcx6IbhnbkajnfbJS4xA20wi6vLDlNn8Y",
    authDomain: "instagram-clone-react-20a37.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-20a37-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-20a37",
    storageBucket: "instagram-clone-react-20a37.appspot.com",
    messagingSenderId: "708843291013",
    appId: "1:708843291013:web:d4276e3e7f14630db204ec"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};


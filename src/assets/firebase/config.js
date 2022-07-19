import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBSjcVIBm8nEnmKr6FlqTraEm1z3ZCADk',
  authDomain: 'cooking-ninja-site-46581.firebaseapp.com',
  projectId: 'cooking-ninja-site-46581',
  storageBucket: 'cooking-ninja-site-46581.appspot.com',
  messagingSenderId: '92087780960',
  appId: '1:92087780960:web:c690b2195ab35ccb00a505',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFireStore = firebase.firestore();

export { projectFireStore };

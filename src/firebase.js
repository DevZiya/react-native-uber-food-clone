import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmMjOSsOZIbGbVtd-D9I-PaOzIiTch9Sc',
  authDomain: 'react-native-uber-ac39c.firebaseapp.com',
  projectId: 'react-native-uber-ac39c',
  storageBucket: 'react-native-uber-ac39c.appspot.com',
  messagingSenderId: '293597962360',
  appId: '1:293597962360:web:28ae3396d93e1045dacd8d',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


export default firebase;

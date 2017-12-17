import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyRoutes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAUTWn2F8u3Q7oeYrYHp8OwsDajPk_RB-A",
    authDomain: "test-01-141907.firebaseapp.com",
    databaseURL: "https://test-01-141907.firebaseio.com",
    projectId: "test-01-141907",
    storageBucket: "test-01-141907.appspot.com",
    messagingSenderId: "906558294346"
};
firebase.initializeApp(config);


ReactDOM.render(<MyRoutes />, document.getElementById('root'));
registerServiceWorker();

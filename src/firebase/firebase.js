import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBiyliiXVEcjeLkw4zc1vrE4wt4vd6m9R4",
	authDomain: "classroom2187.firebaseapp.com",
	databaseURL: "https://classroom2187-default-rtdb.firebaseio.com",
	projectId: "classroom2187",
	storageBucket: "classroom2187.appspot.com",
	messagingSenderId: "570209295031"
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export { firebase, storage, database };

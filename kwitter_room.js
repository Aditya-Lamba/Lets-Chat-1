var firebaseConfig = {
    apiKey: "AIzaSyAuLwyk_eZcNuY0ExgnoSaWW3QjURPsnbY",
    authDomain: "lets-chat-6836e.firebaseapp.com",
    databaseURL: "https://lets-chat-6836e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6836e",
    storageBucket: "lets-chat-6836e.appspot.com",
    messagingSenderId: "57692059001",
    appId: "1:57692059001:web:2aaa0af9bab676ab0d2ba8",
    measurementId: "G-J49E4913CZ"
  };
  firebase.initializeApp(firebaseConfig);

 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

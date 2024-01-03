  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAd3ZA7uyNJe-Jx5l8-68Yh8RM3gAq62Dk",
    authDomain: "portfolio-d1c85.firebaseapp.com",
    projectId: "portfolio-d1c85",
    storageBucket: "portfolio-d1c85.appspot.com",
    messagingSenderId: "438723156853",
    appId: "1:438723156853:web:4245cf0b3a42ec516b913c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import{getDatabase,ref} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  const db = getDatabase();
  var namebox = document.getElementById(qname);
  var emailbox = document.getElementById(qemail);
  var phonebox = document.getElementById(phoneno);
  var subjectbox =document.getElementById(subject);
  var messagebox = document.getElementById(message);
  var howtoconnect = document.getElementById(howtoconnect);
  
  var submitbutton = document.getElementById(submit);

  function insertdata(){
    console.log("submit function called");
    set(ref(db,"Persons/" + phonebox.value),{
        Name : namebox.value,
        Email : emailbox.value,
        Phone : phonebox.value,
        Subject : subjectbox.value,
        Message : messagebox.value,
        howtoconnect : howtoconnect.value,

    })
    .then(() =>{
        alert("Form submitted successfully");
    })
    .catch((error) =>{
        alert("Error in submitting form:" + error);
    });
  }
  submitbutton.addEventListener('click',insertdata);

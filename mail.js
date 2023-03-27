const firebaseConfig = {
    apiKey: "AIzaSyAQvkpmqClcqSqXVhSlyp48MS_Kl2VdHEI",
    authDomain: "test-74d77.firebaseapp.com",
    databaseURL: "https://test-74d77-default-rtdb.firebaseio.com",
    projectId: "test-74d77",
    storageBucket: "test-74d77.appspot.com",
    messagingSenderId: "483319479281",
    appId: "1:483319479281:web:741e1a7759694887eb2250",
    measurementId: "G-7MF2EM6T86"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contact-form");
  
  document.getElementById("contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
    var phonenumber = getElementVal("PhoneNumber");
  
    saveMessages(name, emailid, msgContent,phonenumber);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, phonenumber) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      phonenumber: phonenumber,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
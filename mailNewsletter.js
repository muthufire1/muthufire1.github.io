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
  var contactFormDB = firebase.database().ref("newsletterSubscribe");
  
  document.getElementById("Newsletter").addEventListener('keypress', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
      var emailid = getElementVal("newsletter-email");
      saveMessages(emailid);
    
      //   enable alert
      document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    
      //   reset the form
      document.getElementById("contactForm").reset();
    }
    
  }
  
  const saveMessages = (emailid) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      emailid: emailid,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
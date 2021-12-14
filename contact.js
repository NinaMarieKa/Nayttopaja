//funktio, jolla tarkistetaan, että kentät on täytetty ja täytetty oikein

function isValid(){

var nimi = document.forms["form"]["name"];
var email = document.forms["form"]["email"];
var viesti = document.forms["form"]["msg"];

// nimi-kentän tarkistus
    if (nimi.value == "") {
        window.alert("Please enter your name");
        nimi.focus();
        return false;
    }
// sähköpostikentän tarkistus
 if (email.value == "") {
        window.alert("Please enter a valid email address");
        email.focus();
        return false;
    }

    if(viesti.value =="") {
      window.alert("The message box is empty")
      viesti.focus();
      return false;
    }
}
// funktio, jolla tarkistetaan onko sähköposti oikesa
function ValidateEmail(email){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat)) {
    alert("Valid email address");
    document.form.email.focus();
  return true;
}
  else if(email.value == "") {
    window.alert("Please enter a valid email address");
    email.focus();
    return false;

  }
  else {
  alert("You have entered an invalid email address");
  document.form.email.focus();
  return false;
 }
}

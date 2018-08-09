$(document).ready(function(){


const USERS = [
      {email: "steveg@example.com",
       password: "PaSsWoRd",
       birthday: "2000-09-30 00:00:00",
       role: "basic"},
      {email: "hanneM@example.com",
       password: "hanneRules!",
       birthday: "1980-04-15 00:00:00",
       role: "basic"},
      {email: "lindaG@example.com",
       password: "lg014589",
       birthday: "2012-01-03 00:00:00",
       role: "admin"},
      {email: "nEsposito@example.it",
       password: "pswd1234",
       birthday: "1975-03-23 00:00:00",
       role: "advanced"},
      {email: "draganP@example.hr",
       password: "volimbaku",
       birthday: "1995-06-06 00:00:00",
       role: "advanced"}]




// check email and password for login
       $("#login").on("click", login)



// if email and password are correct redirect to library
  function login(){

    // for loop to go review emails and passwords
    var emailMatches = false;
    var passwordMatches = false;
    USERS.forEach(function(element, index) {
      $("#errors").empty();

      // add to lowerCase
      emailMatches =  emailMatches ? true : $("#email").val() == element.email;
      passwordMatches = passwordMatches ? true : $("#password").val() == element.password;
    });

       if (emailMatches && passwordMatches) {
           location.href="./library.html";

// if incorrect show error message for email or password or both
       }
       else {
         if(!emailMatches){
           $("#errors").append(`<div class="alert alert-danger" role="alert">Email is incorrect!</div>`);
         }
         if(!passwordMatches){
           $("#errors").append(`<div class="alert alert-danger" role="alert">Password is incorrect!</div>`);
       }
     }
     }

// set local storage with the 4 variables: email field, password field, submit button, errors container div


// storing input from register-form
function store() {
    localStorage.setItem('user', email.value);
}
// stringify the object.
//
// // check if stored data from register-form is equal to entered data in the   login-form
// function check() {
//
//     // stored data from the register-form
//     var storedEmail = localStorage.getItem('email');
//     var storedPassword = localStorage.getItem('password');
//
//     // entered data from the login-form
//     var userEmail = document.getElementById('userName');
//     var userPassword = document.getElementById('userPassword');
//
//     // check if stored data from register-form is equal to data from login form
//     if(userName.value !== storedEmail || userPassword.value !== storedPassword) {
//         alert('ERROR');
//     }else {
//         alert('You are loged in.');
//     }
// }





       // END
       });

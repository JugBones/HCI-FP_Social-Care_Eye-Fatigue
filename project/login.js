/* (Arvin)*/
/* Script to make login using google functional
Reference : https://www.youtube.com/watch?v=PctSxrQ3JrI&list=LL&index=2,
https://officefloor.net/tutorials/GoogleSigninHttpServer/index.html */


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".name").text(profile.getName());
    
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}

function validate(){
  var username = document.querySelector("#uName");
  var password = document.querySelector("#pw");

  if (username.value == "" ){
    document.getElementById("usernameHelp").textContent = "No blank values";
  }
  if (password.value == ""){ 
    document.getElementById("pwHelp").textContent = "No blank values";
  }
}
  
  
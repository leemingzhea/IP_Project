document.addEventListener("DOMContentLoaded", function() {
  const APIKEY = "65950459facbda2bda336da0";
  
  document.getElementById("login").addEventListener("click", function(e) {
    // Prevent page from refreshing after pressing the button 
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#pw").val();

    let getaccount = {
      async: true,
      crossDomain: true,
      url: "https://interactivedev-a367.restdb.io/rest/accounts",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
    };

    $.ajax(getaccount).done(function (response) {
      var check = false;
      //validate the email and password
      for (var i = 0; i < response.length; i++) {
        if (response[i].username == username && response[i].password == password) {
          check = true;
          break;
        }
      }
      if (check) {
        // play lottie animation
        $("#loading").html(
          '<dotlottie-player src="https://lottie.host/df7be72f-2dd8-4c74-aea8-2a19f48b3b3d/18xFRGPJ8A.json" background="#FFFFFF" speed="1.5" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 5; width: 100vw; height: 100vh; overflow: hidden"; loop autoplay></dotlottie-player>'
        );
        
        setTimeout(function() {
          window.location.href = "http://127.0.0.1:5501/store.html";
        }, 3000);
      } else {
        $("#message").html(`<div class="container p-3 text-danger border border-danger rounded-3">
                          **Invalid email or password, please try again.
                          </div>`);
      }
    });

    localStorage.setItem("username", username);
  });
});

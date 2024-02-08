const APIKEY = "65950459facbda2bda336da0";

// Retrieve the username from local storage
var username = localStorage.getItem("username");
var points = localStorage.getItem("points");
// Display the username in the specified element
document.getElementById("username").innerText = username;
document.getElementById("points").innerText = points;

// Make a GET request to the RESTful API
fetch("https://interactivedev-a367.restdb.io/rest/accounts", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Print the response data to the console
    var card = data[0].card;
    // console.log("Card Number:", card);
    document.getElementById("Card").innerText = card;
    // add card detaials into local storage
    localStorage.setItem("Card", card);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  $(document).ready(function() {
    $("#signout").click(function() {
      $("#loading").html(
        '<dotlottie-player src="https://lottie.host/df7be72f-2dd8-4c74-aea8-2a19f48b3b3d/18xFRGPJ8A.json" background="#FFFFFF" speed="1.5" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 5; width: 100vw; height: 100vh; overflow: hidden"; loop autoplay></dotlottie-player>'
      );
  
      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5500/index.html";
      }, 3000);
    });
  });
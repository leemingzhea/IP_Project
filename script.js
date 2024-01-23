document.addEventListener("DOMContentLoaded", function() {
    const APIKEY = "65950459facbda2bda336da0";
    getContacts();
    // document.getElementById("update-contact-container").style.display = "none";
    document.getElementById("update-signup-container").style.display = "none";
    document.getElementById("add-update-msg").style.display = "none";

    document.getElementById("contact-submit").addEventListener("click", function(e) {
        // Prevent default action/prevent refreshing of the button 
        e.preventDefault();
    
        //[STEP 2]: Let's retrieve form data
        // For now, we assume all information is valid
        // You are to do your own data validation
        let signupName = document.getElementById("signup-name").value;
        let signupNumber = document.getElementById("signup-number").value;
        let signupEmail = document.getElementById("signup-email").value;
    
        let signupPassword = document.getElementById("signup-password").value;
        let signupConfirmation = document.getElementById("signup-confirmation").value;

    
        //[STEP 3]: Get form values when the user clicks on send
        // Adapted from restdb API
        let jsondata = {
          "name": signupName,
          "number": signupNumber,
          "email": signupEmail,
          "password": signupPassword,
          "confirmation": signupConfirmation,
        };

        let settings = {
            method: "POST", //[cher] we will use post to send info
            headers: {
              "Content-Type": "application/json",
              "x-apikey": APIKEY,
              "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            beforeSend: function() {
              //@TODO use loading bar instead
              // Disable our button or show loading bar
              document.getElementById("signup-submit").disabled = true;
              // Clear our form using the form ID and triggering its reset feature
              document.getElementById("add-signup-form").reset();
            }
          }

    //[STEP 5]: Send our AJAX request over to the DB and print response of the RESTDB storage to console.
    fetch("https://interactivedev-a367.restdb.io/rest/signup", settings)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        document.getElementById("signup-submit").disabled = false;
        //@TODO update frontend UI 
        document.getElementById("add-update-msg").style.display = "block";
        setTimeout(function() {
            document.getElementById("add-update-msg").style.display = "none";
        }, 3000);
        // Update our table 
        getContacts();

        });//end click 
    });




    
});


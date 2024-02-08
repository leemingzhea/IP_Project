
function addToCart() {

    var popupNotification = document.getElementById("popupNotification");
    popupNotification.style.display = "block";
  
    // Hide the pop-up notification after 3 seconds
    setTimeout(function() {
      popupNotification.style.display = "none";
    }, 3000);
  
    // Retrieve the selected quantity
    var quantity = document.getElementById("inputQuantity").value;
  
    // Retrieve the product details
    var productName = document.getElementById("cap").innerText;
    var productPrice = parseFloat(document.getElementById("cap-price").innerText.replace("$", "")); // Convert to number and remove the "$" symbol
    var productImage = document.getElementById("cap-img").src;
  
  
    // Create the item object
    var item = {
      name: productName,
      price: productPrice,
      quantity: quantity,
      image: productImage
    };
  
    // Check if there is already a cart in local storage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the item already exists in the cart
    var existingItem = cart.find(function (cartItem) {
      return cartItem.name === item.name;
    });
  
    if (existingItem) {
      // Update the quantity of the existing item
      existingItem.quantity = quantity; // Update the quantity directly
      existingItem.price = (productPrice * parseInt(quantity)).toFixed(2); // Update the price
  
    } else {
      // Calculate the price for the new item
      var totalPrice = (productPrice * parseInt(quantity)).toFixed(2);
      item.price = totalPrice;
  
      // Add the new item to the cart
      cart.push(item);
    }
  
    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  
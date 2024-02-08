
function applyDiscount() {
    var enteredDiscountCode = document.getElementById("discountCodeInput").value.trim();
    
    // Retrieve the voucher code associated with the discount key from local storage
    var storedVoucherCode = localStorage.getItem("5");

    // Check if the entered discount code matches the stored voucher code
    if (storedVoucherCode && storedVoucherCode === enteredDiscountCode) {
        // Convert the stored voucher code to a float
        var discountValue = parseFloat(storedVoucherCode) || 0;

        // Update the discount on the page
        updateDiscount(discountValue);

        // Update price details
        updatePriceDetails();
        
        alert('Discount Applied Successfully!');
        console.log("Discount Applied Successfully! Voucher Code:", enteredDiscountCode);
    } else {
        alert('Invalid discount code. Please try again.');
        console.log("Invalid Discount Code:", enteredDiscountCode);
    }
}

function updateDiscount(discountValue) {
    // Update the discount on the page
    document.getElementById("discount").textContent = "$" + discountValue.toFixed(2);
}

function updatePriceDetails() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var subtotal = calculateSubtotal(cart);
    var discount = parseFloat(document.getElementById("discount").textContent.replace("$", "")) || 0;
    var total = subtotal - discount;

    // Update subtotal, total, and discount on the page
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("discount").textContent = "$" + discount.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

function calculateSubtotal(cart) {
    var subtotal = 0;

    // Calculate subtotal from cart items
    cart.forEach(function (item) {
        subtotal += parseFloat(item.price);
    });

    return subtotal;
}


document.addEventListener("DOMContentLoaded", function () {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart items container
    updateCartItems(cart);

    // Update price details
    updatePriceDetails();
});

function updateCartItems(cart) {
    var cartItemsContainer = document.getElementById("cartItemsContainer");

    // Clear existing content
    cartItemsContainer.innerHTML = "";

    // Iterate through cart items and update the cart page
    cart.forEach(function (item, index) {
        var cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `
        <div class="row-md-6 mb-3"> 
        <div class="card">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="${item.image}" alt="${item.name}" class="card-img-top" style="max-width: 100px; max-height: 100px;">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price: $${item.price}</p>
                        <p class="card-text">Quantity: ${item.quantity}</p>
                        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var removedItem = cart.splice(index, 1)[0];

    // Update the cart items container
    updateCartItems(cart);

    // Update price details
    updatePriceDetails();

    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function redirectToPayment() {
    // Redirect to payment.html
    window.location.href = "payment.html";
}
$(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('card');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);
        
        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    
    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        
        for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
            parts.push(sanitizedValue.substring(i, i + 2));
        }
        
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
        
    // Radio button
    $('.radio-group .radio').click(function(){
        $(this).parent().parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });
    
    // Handle Payment Confirmation
    document.querySelector('.btn-pay').addEventListener('click', function() {
        // Check if all required fields are filled
        var address = document.getElementById('address').value.trim();
        var city = document.getElementById('city').value.trim();
        var zip = document.getElementById('zip').value.trim();
        var country = document.getElementById('country').value.trim();
        var name = document.getElementById('name').value.trim();
        var cardNo = document.getElementById('card').value.trim(); // Update here
        var expDate = document.getElementById('exp').value.trim(); // Update here
        var cvv = document.getElementById('cvv').value.trim();

        // Check if any required field is empty
        if (address === '' || city === '' || zip === '' || country === '' || name === '' || cardNo === '' || expDate === '' || cvv === '') {
            alert('Please fill in all the required fields.');
        } else {
            // Redirect to store.html
            window.location.href = 'store.html';
        }
    });
});

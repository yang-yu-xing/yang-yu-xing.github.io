var phoneMatch = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
var emailMatch = /^\S{1,}[@]\S{1,}[.]\S{1,}$/; 

let user_first = document.getElementById("user_first");
let user_last = document.getElementById("user_last");
let user_email = document.getElementById("user_email");
let user_phone = document.getElementById("user_phone");
let user_message = document.getElementById("user_message");

var firstError = document.getElementById("user_first-error")
var lastError = document.getElementById("user_last-error")
var emailError = document.getElementById("user_email-error")
var phoneError = document.getElementById("user_phone-error")
var messageError = document.getElementById("user_message-error")

function validateFirst() {
    
    if (user_first.value == "") {
        firstError.innerHTML = "First name is required"
        return false;
    } else {
        firstError.innerHTML = ""
        return true
    }

}

function validateLast() {
    if (user_last.value == "") {
        lastError.innerHTML = "Last name is required"
        return false;
    } else {
        lastError.innerHTML = ""
        return true
    }
}

function validateEmail() {
    if (emailMatch.test(user_email.value)) {
        emailError.innerHTML = ""
        return true
    } else {
        emailError.innerHTML = "Format email as  xyz@domain.top-level-domain"
        return false
    }
    
}

function validatePhone() {
    if (phoneMatch.test(user_phone.value)) {
        phoneError.innerHTML = ""
        return true
    } else {
        phoneError.innerHTML = "format: 123-456-7890"
        return false
    }
    
}

function validateMessage() {
    if (user_message.value.length == 0) {
        messageError.innerHTML = "Message cannot be blank"
        return false;
    } else {
        messageError.innerHTML = ""
        return true;
    }
}


function validateForm() {
    validateFirst()
    validateLast()
    validateEmail()
    validatePhone()
    validateMessage()
    if (!(!validateFirst() || !validateLast() || !validateEmail() || !validatePhone() || !validateMessage())) {
        return true
    } else {
        return false
    }



}

let serviceID = "service_fovk43b"
let templateID = "template_v5qlmxs"

emailjs.init("QNe7UScNSnBJ1eqAm");

window.onload = function() {
    document.getElementById("contact_form").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            
            const inputFields = {
                user_first: user_first.value,
                user_last: user_last.value,
                user_email: user_email.value,
                user_phone: user_phone.value,
                user_message: user_message.value
            }

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    console.log('SUCCESS!');
                    user_first.value = ""
                    user_last.value = ""
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
        
    });
}
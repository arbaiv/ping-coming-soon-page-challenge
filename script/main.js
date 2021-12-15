var email = document.getElementById("email");
var emailError = document.querySelector(".error-text");
var emailErrorText = document.querySelector(".error-text p");
document.getElementById("form").onsubmit = function(e){
    e.preventDefault();
};
email.addEventListener("invalid", function(e){
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity(" ");
        email.classList.add("error-input-design");
        emailError.className = "error-validate";
        emailErrorText.textContent = "Whoops! It looks like you forgot to add your email";
    } else if(e.target.validity.typeMismatch){
        e.target.setCustomValidity(" ");
        email.classList.add("error-input-design");
        emailError.className = "error-validate";
        emailErrorText.textContent = "Please provide a valid email address";
    } else {
        e.target.setCustomValidity(" ");
        email.classList.remove("error-input-design");
        emailError.className = "error-text";
        emailErrorText.textContent = "";
    }
});
email.onblur = function(e){
    if(e.target.value !== ""){
        if(emailError.className === "error-validate"){
            email.classList.remove("error-input-design");
            emailError.className = "error-text";
        }
    }
};
// SELECTORS
const submitBtn = document.getElementById("submit-btn");

// EVENTLISTENERS
submitBtn.addEventListener("click", ()=> {
    let email = document.getElementById("email-address");
    const validRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const errorImage = document.getElementById("error-img");
    const errorMessage = document.getElementById("error-message");


    if(validRegex.test(email.value)) {
        errorImage.style.display = "none";
        errorMessage.style.display = "none";
        email.style.border = "";
    } else {
        errorImage.style.display = "flex";
        errorMessage.style.display = "flex";
        errorMessage.style.transition = "2.5ms all ease-in-out";
        email.style.border = "2px solid #f96464";
    }
}
)

// function emailVerification() {
//     const emailInput = document.getElementById("email-address").type;
//     console.log(emailInput);
// }



// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
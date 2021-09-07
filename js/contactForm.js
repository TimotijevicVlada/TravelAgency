//Regex
export function validateSignup(nameInput, emailInput, numberInput, passInput, passConfInput, nameErr, emailErr, numberErr, passErr, passConfErr) {
    //Validate name
    if(nameInput.value.trim() && /^[A-Z][a-z]{2,}/.test(nameInput.value.trim())) {
        nameErr.innerHTML = "";
    } else if(!nameInput.value.trim()) {
        nameErr.innerHTML = "Username required!";
    } else if(!/^[A-Z][a-z]{2,}/.test(nameInput.value.trim())) {
        nameErr.innerHTML = "Enter a valid name!";
    }

    //Validate email
    if(emailInput.value && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
        emailErr.innerHTML = "";
    } else if (!emailInput.value) {
        emailErr.innerHTML = "Email required!";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
        emailErr.innerHTML = "Email adress is invalid!";
    }

    //Validate phone number
    if(numberInput.value && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(numberInput.value)) {
        numberErr.innerHTML = "";
    } else if(!numberInput.value) {
        numberErr.innerHTML = "Phone number required!";
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(numberInput.value)) {
        numberErr.innerHTML = "Phone number is invalid!";
    } 

    //Validate pass
    if(passInput.value && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passInput.value)) {
        passErr.innerHTML = "";
    } else if(!passInput.value) {
        passErr.innerHTML = "Password required!";
    } else if(passInput.value.length < 8) {
        passErr.innerHTML = "Password should have 8 caracters!";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passInput.value)) {
        passErr.innerHTML = "Password require uppercase, lowercase and number!";
    }

    //Validate confirm pass
    if(passConfInput.value && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passConfInput.value)) {
        passConfErr.innerHTML = "";
    } else if(!passConfInput.value) {
        passConfErr.innerHTML = "Confirm password required!";
    } else if(passConfInput.value.length < 8) {
        passConfErr.innerHTML = "Password should have 8 caracters!";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passConfInput.value)) {
        passConfErr.innerHTML = "Password require uppercase, lowercase and number!";
    }
}
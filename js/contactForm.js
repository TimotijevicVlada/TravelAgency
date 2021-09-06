export default function validateInfo(values) {
    let errors = [];

    //Validate name
    if(!values.username.trim()) {
        errors.username = "Username required!";
    }else if(!/^[A-Z][a-z]{2,}/.test(values.username.trim())) {
        errors.name = "Enter a valid name!";
    }

    //Validate email
    if(!values.email) {
        errors.email = "Email required!";
    }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = "Email adress is invalid!";
    }

    //Validate pass
    if(!values.password) {
        errors.password = "Password is required!";
    }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)) {
        errors.password = "Password require uppercase, lowercase and number!";
    }
    return errors;
}
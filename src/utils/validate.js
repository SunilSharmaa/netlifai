let validateCredential = (username, email, password) => {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let isEmailValid = emailPattern.test(email);
    let isPasswordValid = passwordPattern.test(password);
    console.log(email,password);

    if(!isEmailValid) {
        return "Invalid Email";
    }

    if(!isPasswordValid) {
        return "Invalid Password. (Must have 8+ digits with at least 1 uppercase, 1 lowercase & 1 number)";
    }

    return null;


    
}

export default validateCredential;
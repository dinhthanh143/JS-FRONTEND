let checkBtn = document.getElementById('check');

let emails = JSON.parse(localStorage.getItem('obj')) || [];
emails = [
    { email: "admin@example.com", password: "password123" },
    { email: "user@example.com", password: "user123" }
]

let form = document.getElementsByTagName("form")[0]
checkBtn.addEventListener("click", function() {
 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm').value;

    if (password === "" && email === "" && confirmPassword === "") {
        alert(`Please fill the form`);
    } else if (password === "") {
        alert(`Please enter your password`);
    } else if (confirmPassword !== password) {
        alert(`Please confirm your password correctly!`);
    } else if (email === "") {
        alert(`Please enter your email`);
    } else {
        let check = checkEmail(email, password);
        if (check) {
            alert(`Form submitted successfully!`);
        }
    }
});

function checkEmail(current, pass) {
    let emailExists = emails.some(element => element.email === current);
    if (emailExists) {
        alert(`Email already exists!`);
        return false;
    }
    emails.push({ email: current, password: pass });
    localStorage.setItem('obj', JSON.stringify(emails));
    return true;
}
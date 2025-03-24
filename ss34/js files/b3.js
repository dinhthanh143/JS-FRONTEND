
let loginBtn = document.getElementById('check');
let emails = JSON.parse(localStorage.getItem('obj'))
loginBtn.onclick = function(){
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
if (password === "" && email === "" ) {
    alert(`Please fill the form`);
} else if (password === "") {
    alert(`Please enter your password`);
} else if (email === "") {
    alert(`Please enter your email`);
}else{
    let check = true
    emails.forEach(function(comEmail){
        if(comEmail.email === email && comEmail.password === password){
            alert(`Dang nhap thanh cong`)
            
            check = false
        }
    })
    if(check){
        alert(`Mat khau khong dung hoac Email khong ton tai.`)
    }
}
}
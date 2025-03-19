let fixedUserName = "huanrose@gmail.com"
let fixedPassword = "123456"
let form = document.getElementById("form")
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    let data = new FormData(form)
    let userName = data.get('username')
    let password = data.get("password")
    if(userName === fixedUserName && password == fixedPassword){
        console.log(`Dang nhap thanh cong`)
    }else{
        console.log(`Dang nhap that bai`)
    }
})
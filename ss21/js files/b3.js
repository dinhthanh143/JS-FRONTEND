let password = "abcde123"
let guess
while (guess != password){
    guess = prompt("Moi nhap mat khau: ")
    if(guess != password){
        alert(`Sai mat khau`)
    }
    
}
alert(`Dang nhap thanh cong`)
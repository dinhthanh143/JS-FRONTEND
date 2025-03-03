let str= prompt("Moi nhap chuoi de kiem tra: ")
let test = str.indexOf(' ') 

if(str.indexOf(' ') != -1){
    alert(`Chuoi chua dau cach`)
}else{
    alert(`Chuoi khong chua dau cach`)
}
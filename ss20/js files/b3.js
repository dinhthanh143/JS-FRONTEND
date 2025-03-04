let num = prompt('Moi nhap so: ')
if (isNaN(num) ){
    alert(`So khong hop le`)
}else if(num[0]===num[num.length-1]){
    alert(`so da nhap la so doi xung`)

}else{
    alert(`so da nhap khong phai so doi xung`)
}


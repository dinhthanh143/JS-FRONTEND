let year = +prompt("moi nhap nam: ")
if(year<0 || isNaN(year) == true){
    alert(`Nam nhap khong hop le`)
}else if(year%400==0 || year%4==0 && year%100 != 0) {
    alert(`Day la nam nhuan`)
}else{
    alert(`Day khong la nam nhuan`)
}

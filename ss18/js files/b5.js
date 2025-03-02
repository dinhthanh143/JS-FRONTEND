let year = +prompt("Moi nhap so nam kinh nghiem: ")
if (year>6){
    alert(`Xep loai: Quan ly`)
}else if(year>4){
    alert(`Xep loai: Chuyen vien`)
}else if(year>1){
    alert(`Xep loai: Nhan vien co kinh nghiem`)
}else if(year<1){
    alert(`Xep loai: Moi vao nghe`)
}else{
    alert(`Nam nhap phai la so`)
}
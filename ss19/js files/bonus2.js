let math = +prompt("Moi nhap diem toan: ")
let van = +prompt("Moi nhap diem van: ")
let eng = +prompt("Moi nhap diem anh: ")

let avg = (math + van + eng)/3
if(avg>=9){
    alert(`Hoc luc: Xuat sac`)
}else if(avg>=7){
    alert(`Hoc luc: Gioi`)
}else if(avg>=5){
    alert(`Hoc luc: Kha`)
}else if(5>avg){
    alert(`Hoc luc: kem`)
}else{
    alert(`Diem khong hop le`)
}
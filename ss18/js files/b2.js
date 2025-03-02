let math = +prompt("Moi nhap diem toan: ")
let van = +prompt("Moi nhap diem van: ")
let eng = +prompt("Moi nhap diem anh: ")

let avg = (math + van + eng)/3

if(avg>=8){
    alert(`Hoc luc: Gioi`)
}else if(avg>=6.5){
    alert(`Hoc luc: Kha`)
}else if(avg>=5){
    alert(`Hoc luc: Trung binh`)
}else if(5>avg){
    alert(`Hoc luc: yeu`)
}else{
    alert(`Diem khong hop le`)
}
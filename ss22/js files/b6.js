let numbers = [2,5,7,4,1,8,6,2,5,7]
let num = +prompt(`Moi nhap so: `)
if(isNaN(num)){
    alert(`So khong hop le`)
}else{
let appear = 0
let i
for(i=0; i<numbers.length;i++){
if(numbers[i]===num){
    appear++
}
}
if(appear===0){
    alert(`so ${num} khong xuat hien trong mang`)
}else{
    alert(`so ${num} xuat hien ${appear} lan trong mang`)
}
}
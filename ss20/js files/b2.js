let num = +prompt("moi nhap so: ") 
if(isNaN(num) || num<0){
     alert(`Du lieu khong hop le`)
}else{
let i
for( i = 1; i<= num; i++){
    if(i%5==0){
        alert(`so ${i} chia het cho 5 trong khoang tu 1 den ${num}`)
        continue
    }
}

}
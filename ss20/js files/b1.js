
   let num = +prompt("moi nhap so: ") 
   if(isNaN(num) || num<0){
        alert(`Du lieu khong hop le`)
   }else{
 let total=0
let i
for( i = 1; i<= num; i++){
    total = total + Number(i) 
}
alert(` tong cac so nguyen tu 1 den ${num} la ${total}`)
   }





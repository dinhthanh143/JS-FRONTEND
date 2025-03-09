let arr=[]
let max=0
let loc=0
let i
for( i=0;i<10;i++){
    arr[i]= +prompt(`Moi nhap so: `)
    if(isNaN(arr[i])){
        alert(`Day khong phai la so`)
        i--
        continue
    }
    if(max<arr[i]){
        max = arr[i]
        loc = i
    }
}
if(arr.length === 0){
    alert(`Khong co so lon nhat`)
}else{
   alert(`So lon nhat: ${max}
    vi tri: ${loc}`) 
}

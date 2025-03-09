let arr=[]
let arr2=[]
let check = 0
for(let i=0;i<10;i++){
    arr[i]=+prompt(`Moi nhap so: `)
    if(isNaN(arr[i])){
        alert(`Day khong phai la so`)
        i--
        continue
    }
  if(arr[i]>=10){
        arr2.push(arr[i])
        check++
    }
}

if(check === 0){
    alert(`Khong co so nao lon hon 10`)
}else{
    alert(arr2)
}
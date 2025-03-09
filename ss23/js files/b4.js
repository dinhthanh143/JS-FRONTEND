let arr=[]
let arr2=[]
let n = +prompt(`Moi nhap so luong phan tu: `)
if(n<0 || isNaN(n)){
    alert(`so luong phan tu khong hop le`)
}else if(n==0){
    alert(`Khong co ki tu so`)
}else{
   for( i=0;i<n;i++){
    arr[i]= +prompt(`Moi nhap so: `)
    if(isNaN(arr[i])){
        continue
    }else{
        arr2.push(arr[i])
    }
    }
    if(arr2.length === 0){
        alert(`Khong co ki tu so`)
    }else{
         alert(arr2)   
    }
 
}



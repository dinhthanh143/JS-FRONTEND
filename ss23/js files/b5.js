let arr = []
let n = +prompt(`Moi nhap so luong phan tu: `)
if(n<0 ){
    alert(`so luong phan tu khong duoc am`)
}else if(n==0){
    alert(`Mang khong co phan tu`)
}else if(isNaN(n)){
    alert(`so luong khong hop le`)
}else{
    let sum =0;
    let check = false
    let i
    for(i=0;i<n;i++){
        arr[i]= +prompt(`Moi nhap so: `)
        if(isNaN(arr[i])){
            continue
        }else{
            sum += arr[i]
            check = true
        }
    }
    if(check){
        alert(sum)
    }else{
        alert(`Khong co phan tu nao la so`)
    }
    
}
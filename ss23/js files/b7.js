let arr = []
let n = +prompt(`Moi nhap so luong phan tu: `)
if(n<0 ){
    alert(`so luong phan tu khong duoc am`)
}else if(n==0){
    alert(`Mang khong co phan tu`)
}else if(isNaN(n)){
    alert(`so luong khong hop le`)
}else{
    
    for(i=0;i<n;i++){
        arr[i]= +prompt(`Moi nhap so: `)
        }
    arr.sort()
    let max = arr[arr.length-1]
    for(i=arr[arr.length-1]; i>=0;i--){
        if(arr[i]===max){
            continue
        }else if(arr[i]<max){
            alert(arr[i])
            break
        }
    }

}
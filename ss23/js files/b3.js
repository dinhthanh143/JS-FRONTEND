let arr = []
let n = +prompt(`Moi nhap so luong phan tu: `)
if(n<0 || isNaN(n)){
    alert(`so luong phan tu khong hop le`)
}else if(n==0){
    alert(`Mang khong co phan tu`)
}else{
    let i
    let count = 0
    for(i=0;i<n;i++){
        arr[i] = +prompt(`Moi nhap phan tu: `)
        if(arr[i]<0){
            count++
        }
    }
    alert(count)
}
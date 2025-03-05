let num = +prompt(`Moi nhap so can kiem tra: `)
if (isNaN(num)){
    alert(`So khong hop le`)
}else{
    let check = true
    for(let i = 2; i<num ; i++){
        if(num%i==0){
            check=false
        }
    }
    if(check){
        alert(`${num} la so nguyen to`)
    }else{
        alert(`${num} khong la so nguyen to`)
    }
}
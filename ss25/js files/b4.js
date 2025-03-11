let n = +prompt(`Moi nhap so kiem tra: `)
let result = isPrime(n)
alert(result)

function isPrime (n){
    if(isNaN(n)){
        return `du lieu khong hop le`
    }
    let check = true
    for(let i = 2; i<n ; i++){
        if(n%i==0){
            check=false
        }
    }
    if(check){
        return `la so nguyen to`
    }else{
           return `khong la so nguyen to`
    }
}
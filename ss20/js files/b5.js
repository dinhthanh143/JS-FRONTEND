let a = +prompt("moi nhap so a: ")
let b = +prompt("moi nhap so b: ")
let result=a
if (isNaN(a) || isNaN(b)  ){
    alert(`So khong hop le`)
}else{
    let i
    for(i=1 ; i< b; i++ ){
        result *= a
    }
    alert(`${result}`)
}

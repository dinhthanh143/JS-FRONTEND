let a = +prompt(`Moi nhap so thu nhat: `)
let b = +prompt(`Moi nhap so thu hai: `)
let sum = calSum(a,b)
alert(sum)
function calSum (a,b){
    if(isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)){
        return `Du lieu khong hop le`
    }else{
        return a+b
    }
}
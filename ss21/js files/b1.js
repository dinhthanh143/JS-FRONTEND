let check = 0

let total = 0

while(check != 5){
    let num = +prompt(`Moi nhap so: `)
    if(num%2!==0){
        total += num
    }
    check++
}
alert(`tong cac so le trong cac so da nhap la: ${total}`)


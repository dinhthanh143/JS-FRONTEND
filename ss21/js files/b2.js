let check = 0

let even = 0
let odd =0

while(check != 5){
    let num = +prompt(`Moi nhap so: `)
    if(num%2!==0){
        odd++
    }else{
        even++
    }
    check++
}

alert(`co ${even} so le va ${odd} so chan`)


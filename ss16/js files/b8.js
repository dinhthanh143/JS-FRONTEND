let num1 = parseFloat(prompt("moi nhap so thu nhat: ")) 
let num2 = parseFloat(prompt("moi nhap so thu hai: "))
let num3 = parseFloat(prompt("moi nhap so thu ba: "))
    let max = num1
    if (max<num2){
        max = num2
    }
    if (max<num3){
        max = num3
    }
    alert(`so lon nhat la ${max}`)

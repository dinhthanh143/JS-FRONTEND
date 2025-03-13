let menu = `1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
==============
Moi nhap lua chon:`
let choice
while ( choice !==5){
    choice = +prompt(menu)
    switch(choice){
        case 1:
            calSum()
            break
        case 2:
            minus()
            break
        case 3:
            multiply()
            break
        case 4:
            divide()
            break
        case 5:
            alert(`Thoát chương trình.`)
            break
        default:
            alert(`Lua chon khong hop le`)              
    }
}
function calSum(){
    let num1 = +prompt(`Nhập số thứ nhất:`)
    let num2 = +prompt(`Nhập số thứ hai:`)
    if(isNaN(num1) || isNaN(num2)){
        alert(`So khong hop le`)
        return
    }
    let sum = num1 + num2
    alert(`Tong 2 so la: ${num1} + ${num2} = ${sum}`)
}

function minus(){
    let num1 = +prompt(`Nhập số thứ nhất:`)
    let num2 = +prompt(`Nhập số thứ hai:`)
    if(isNaN(num1) || isNaN(num2)){
        alert(`So khong hop le`)
        return
    }
    let total = num1 - num2
    alert(`Hieu 2 so la: ${num1} - ${num2} = ${total}`)
}
function multiply(){
    let num1 = +prompt(`Nhập số thứ nhất:`)
    let num2 = +prompt(`Nhập số thứ hai:`)
    if(isNaN(num1) || isNaN(num2)){
        alert(`So khong hop le`)
        return
    }
    let total = num1 * num2
    alert(`Tich 2 so la: ${num1} x ${num2} = ${total}`)
}

function divide(){
    let num1 = +prompt(`Nhập số thứ nhất:`)
    let num2 = +prompt(`Nhập số thứ hai:`)
    if(isNaN(num1) || isNaN(num2)){
        alert(`So khong hop le`)
        return
    }
    let total = num1 / num2
    alert(`Thuong 2 so la: ${num1} : ${num2} = ${total}`)
}

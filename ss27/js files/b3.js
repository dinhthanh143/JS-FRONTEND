let menu =`=====MENU=====
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
=============
Moi nhap lua chon: `
let choice
while (choice!==5){
        choice = +prompt(menu)
    switch(choice){
        case 1:
            circleArea()
            break
        case 2:
            circlePerimeter()
            break
        case 3:
            rectangleArea()
            break
        case 4:
            rectanglePerimeter()
            break
        case 5:
            alert(`Thoat chuong trinh`)
            break
        default:
            alert(`Lua chon khong hop le!`)
    }
}

function circleArea(){
    let num1 = +prompt(`Moi nhap ban kinh:`)
    if(isNaN(num1)){
        alert(`So khong hop le`)
        return
    }
    let area = (num1**2)*3.14159
    alert(`Dien tich hinh tron la: ${area}`)
}
function circlePerimeter(){
    let num1 = +prompt(`Moi nhap ban kinh:`)
    if(isNaN(num1)){
        alert(`So khong hop le`)
        return
    }
    let perimeter = 2*3.14159*num1
    alert(`Chu vi hinh tron la: ${perimeter}`)
}
function rectanglePerimeter(){
    let num1 = +prompt(`Moi nhap chieu dai:`)
    let num2 = +prompt(`Moi nhap chieu rong:`)
    if(isNaN(num1) || isNaN(num2)){
        alert(`So khong hop le`)
        return
    }
    let perimeter = (num1+num2)*2
    alert(`Chu vi hinh chu nhat la: ${perimeter}`)
}
function rectangleArea(){
    let num1 = +prompt(`Moi nhap chieu dai:`)
    let num2 = +prompt(`Moi nhap chieu rong:`)
    if(isNaN(num1) || isNaN(num2) ){
        alert(`So khong hop le`)
        return
    }
    let area = num1 *num2
    alert(`Dien tich hinh chu nhat la: ${area}`)
}
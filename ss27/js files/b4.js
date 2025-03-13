let menu =`=====MENU=====
1.Nhập danh sách số nguyên.
2.Tính trung bình các số.
3.Tìm số chẵn lớn nhất.
4.Tìm số lẻ nhỏ nhất.
5.Thoát.
=============
Moi nhap lua chon: `
let choice
let arr =[]
while (choice!==5){
    choice = +prompt(menu)
    switch(choice){
        case 1:
            inputNumbers(arr)
            break
        case 2:
           calAverage(arr)
            break
        case 3:
            findMaxEven(arr)
            break
        case 4:
            findMinOdd(arr)
            break
        case 5:
            alert(`Chuong trinh da thoat`)
            break
        default:
            alert(`Lua chon khong hop le`)
            break
    }
}
function inputNumbers(arr){
    let n = +prompt(`Moi nhap so luong so: `)
        if(n<=0 || isNaN(n)){
            alert(`So luong khong hop le`)
        }else{
          for(let i=0; i<n; i++){
            let num = +prompt(`Moi nhap so thu ${i+1}: `)
            if(isNaN(num)){
               alert(`So khong hop le`)
               i--
               continue
            }
            arr.push(num)
        }  
        }
}
function calAverage(arr){
    if(arr.length===0){
        alert(`Mang rong`)
        return 0
    }
    let avg = arr.reduce(function(acc, cur){
        acc = acc + cur
        return acc
    },0)
    let result = avg/arr.length
    alert(`Trung binh cac so trong mang la : ${result}`)
}
function findMaxEven(arr){
    if(arr.length===0){
        alert(`Mang rong`)
        return 0
    }
   let newArr = arr.filter(function(element, index){
       return element % 2 === 0
})
let max = newArr[0]
    for(let i=0; i<newArr.length; i++){
        if(max<newArr[i]){
            max = newArr[i]
        }
    }
    alert(`So nguyen chan lon nhat trong mang la : ${max}`)
}
function findMinOdd(arr){
    if(arr.length===0){
        alert(`Mang rong`)
        return 0
    }
   let newArr = arr.filter(function(element, index){
       return element % 2 !== 0
})
let min = newArr[0]
    for(let i=0; i<newArr.length; i++){
        if(min>newArr[i]){
            min = newArr[i]
        }
    }
    alert(`So nguyen le nho nhat trong mang la : ${min}`)
}

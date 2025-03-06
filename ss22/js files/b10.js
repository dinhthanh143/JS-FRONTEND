// let students = ["thanh", "viet", "chung", "tuan"];
// console.log(students)


// students.unshift("abc")
// students.splice(0,1,"HELOO")
// students.push("hell")
// students.pop()
// students.shift()



// for (let i of students){
//     console.log(i)
// }
let i
let choice
let arr =[]
let caseCheck1
while(choice!== 6){
choice = +prompt(`1.Nhập vào mảng
2.Hiển thị mảng
3.Thêm phần tử
4.Sửa phần tử
5.Xóa phần tử
6.Thoát

Moi nhap lua chon: `)
switch(choice){
    case 1:
        let count = +prompt(`Moi nhap so phan tu muon them: `)
        if(count<=0 || isNaN(count)){
            alert(`So luong khong hop le`)
        }else{
         for(i=0; i<count ;i++){
            let input = prompt(`Moi nhap phan tu: `)
            arr.push(input)   
         }
        }
        break;
    case 2:
        for(let element of arr){
            console.log(element)
        }
        alert(arr)
        break;
    case 3:
        let location = +prompt(`Moi nhap vi tri muon them (nhap dung chi so): `)
        if(isNaN(location) || location<0 || location>arr.length){
            alert(`vi tri khong hop le`)
        }else{
            let newElement = prompt(`Moi nhap phan tu moi (nhap dung chi so): `)
            arr.splice(location,0,newElement)
        }
        break
    case 4:
        let location2 = +prompt(`Moi nhap vi tri muon sua (nhap dung chi so): `)
        if(isNaN(location2) || location2<0 || location2>=arr.length){
            alert(`vi tri khong hop le`)
        }else{
            arr[location2] = prompt(`Moi nhap phan tu moi: `)
        }
        break
    case 5:
        let location3 = +prompt(`Moi nhap vi tri muon xoa (nhap dung chi so): `)
        if(isNaN(location3) || location3<0 || location3>arr.length){
            alert(`vi tri khong hop le`)
        }else{
            arr.splice(location,1)
        }
        break
    default:

}
}
    

let menu =`=====MENU=====
1.Nhập danh sách sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
4.Xóa sinh viên khỏi danh sách.
5.Thoat
=============
Moi nhap lua chon: `
let choice
let arr=[]
while (choice!==5){
    choice = +prompt(menu)
    switch(choice){
    case 1:
        inputInfos(arr)
        break
    case 2:
        displayList(arr)
        break
    case 3:
        findStudent(arr)
        break
    case 4:
        removeStudent(arr)
        break
    case 5:
        alert("Thoat chuong trinh")
        break
    default:
        alert("Lua chon khong hop le")
    }
}

function inputInfos(arr){
    let n = +prompt(`Moi nhap so luong sinh vien: `)
        if(n<=0 || isNaN(n)){
            alert(`So luong sinh vien khong hop le`)
        }else{
          for(let i=0; i<n; i++){
            let name = prompt(`Moi nhap ten sinh vien thu ${i+1}: `)
            arr.push(name)
        }  
        }
}
function displayList(arr){
   alert(arr)
}
function findStudent(arr){
    let name = prompt(`Moi nhap ten sinh vien can tim: `)
        for(let i=0; i<arr.length; i++){
            if(name===arr[i]){
                alert(`Sinh vien co ten ${name} co trong danh sach`)
               return
            }
        }
        alert(`Sinh vien khong co trong danh sach`)
}
function removeStudent(arr){
    let name = prompt(`Moi nhap ten sinh vien can xoa: `)
        for(let i=0; i<arr.length; i++){
            if(name===arr[i]){
                arr.splice(i,1)
                alert(`Xoa sinh vien ${name} thanh cong`)
                return
            }
        }
        alert(`Sinh vien khong co trong danh sach`)
}
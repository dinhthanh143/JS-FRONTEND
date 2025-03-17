let library =[
{
    id: 1,
    title: "Lua dao",
    author: "Dang Viet",
    price: 200,
    isAvailable: true,
},
{
    id: 2,
    title: "lam giau",
    author: "Dinh thanh",
    price: 400,
    isAvailable: false,
},
{
    id: 3,
    title: "lam ngheo",
    author: "Dinh thanh fake",
    price: 330,
    isAvailable: false,
}
]
let menu = `
================MENU=================
1.Thêm sách mới.
2.Hiển thị danh sách sách.
3.Tìm kiếm sách theo tiêu đề.
4.Cập nhật trạng thái mượn/trả sách theo id sách.
5.Xóa sách theo id sách ra khỏi danh sách.
6.Sắp xếp sách theo giá tăng dần.
7.Thoát.
=====================================
Moi nhap lua chon:`
let choice
while (choice!==7){
    choice = +prompt(menu)
    switch(choice){
        case 1:
            addBook()
            break
        case 2:
            dislayBooks()
            break
        case 3:

            break
        case 4:

            break
        case 5:

            break
        case 6:
        sortByPrice()
            break
        case 7:
            alert(`Da thoat chuong trinh`)
            break
        default:
            alert(`Lua chon khong hop le!`)
    }
}
function addBook(){
    let title = prompt(`Moi nhap ten sach: `);
    let author = prompt(`Moi nhap ten tac gia: `);
    let year = +prompt(`Moi nhap nam xuat ban cua sach: `);
    let price = parseFloat(prompt(`Moi nhap gia sach: `))
    let isAvailable = prompt(`Moi nhap trang thai muon sach:`)
    let book = {   
        id: Math.round(Math.random()),
        title,
        author,
        year,
        price,
        isAvailable,
    }
    library.push(book)
}
function dislayBooks(){
    books.forEach(function(book){
        console.log(`      ==ID : ${book.id}==`)
        console.log(`Title : ${book.title}`)
        console.log(`Author : ${book.author}`)
        console.log(`Year : ${book.year}`)
        console.log(`Price : ${book.price}`)
        console.log(`Is Available : ${book.isAvailable}`)
        console.log(`=========================`)
    })
    alert(`Danh sach sach da duoc hien thi tren man hinh console!`)
}
function dislayOneBook(index){
        console.log(`      ==ID : ${book[index].id}==`)
        console.log(`Title : ${book[index].title}`)
        console.log(`Author : ${book[index].author}`)
        console.log(`Year : ${book[index].year}`)
        console.log(`Price : ${book[index].price}`)
        console.log(`Is Available : ${book[index].isAvailable}`)
        console.log(`=========================`)
    
}
function sortByPrice(){
    books.sort((a, b) => a.price - b.price);
    books.forEach(function(book){
        console.log(`      ID : ${book.id}`)
        console.log(`Title : ${book.title}`)
        console.log(`Author : ${book.author}`)
        console.log(`Year : ${book.year}`)
        console.log(`Price : ${book.price}`)
        console.log(`Is Available : ${book.isAvailable}`)
        console.log(`=========================`)
    })
    alert(`Danh sach sach da duoc sap xep va hien thi tren man hinh console!`)
}


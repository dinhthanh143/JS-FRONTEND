// id:4,
// name:"bánh đậu xanh",
// price:60000,
// quantity:30,
// company
let phones = []
let choice
let cart = []
let menu = `
==============MENU================
1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
2. Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
5. Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6. Sắp xếp điện thoại theo giá:
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
9. Thoát chương trình
==========================
Moi nhap lua chon: `;
while (choice !== 9) {
  choice = +prompt(menu);
  switch(choice){
    case 1:
        displayPhones(phones)
        break
    case 2:
        addPhone()
        break
    case 3:
        findPhone(phones)
        break
    case 4:
        buyProduct(phones)
        break
    case 5:
        calTotal()
        break
    case 6:
        sortPhones(phones)
        break
    case 7:
        calTotalInStock()
        break
    case 8:
        displayQuantity()
        break
    case 9:
        console.log("Thoat chuong trinh!")
        break
    default:
        alert("Lua chon khong hop le!")
  }
}
function displayPhones(products){
    let searchCategory = prompt(`Moi nhap hang dien thoai muon hien thi:`)
    let arr = products.filter(products => products.company == searchCategory)
    if(arr.length ===0){
        alert(`Khong co dien thoai nao cua hang nay`)
    }else{
      console.log(`==Danh sách điện thoại của hãng ${searchCategory}:==`)
    arr.forEach(function(product){
        console.table(product)
        console.log(`==========================`) 
})   
    }
}
function addPhone(){
    let id = Math.floor(Math.random() * 1000) + 1;
    let name = prompt("Nhap ten dien thoai:");
    let price = +prompt("Nhap gia dien thoai:");
    let quantity = +prompt("Nhap so luong dien thoai");
    let company = prompt("Nhap ten hang dien thoai:");
    phones.push({ id, name, price, quantity, company });
    alert(`Da them dien thoai moi vao kho`);
}
function findPhone(books){
    let choice
    let findIndex = -1;
  let n = +prompt(`
        1. Tim theo Ten dien thoai
        2. Tim theo ID dien thoai`);
  switch (n) {
    case 1:
       choice = prompt(`Moi nhap Ten dien thoai muon mua`);
       findIndex = -1;
      findIndex = books.findIndex((book) => book.name === choice);
      if (findIndex === -1) {
        alert(`Khong co loai nay`);
      } else {
        console.table(books[findIndex]);
        alert(`Da tim thay loai dien thoai muon mua`);
      }
      break;
    case 2:
       choice = +prompt(`Moi nhap ID dien thoai muon mua`);
       findIndex = -1;
      findIndex = books.findIndex((book) => book.id === choice);
      if (findIndex === -1) {
        alert(`Khong co loai nay`);
      } else {
        console.table(books[findIndex]);
        alert(`Da tim thay loai dien thoai muon mua`);
      }
      break;
    default:
      alert(`Lua chon khong hop le!`);
  }
}
function buyProduct(products){
    let choice = +prompt(`Moi nhap ID dien thoai muon mua`)
    let findIndex = -1
    findIndex = products.findIndex(product=>product.id===choice)
    if(findIndex === -1){
       alert(`Khong co loai nay trong cua hang`)
    }else{
       let amount = +prompt(`Moi nhap so luong muon mua: `)
       if(products[findIndex].quantity < amount ){
           alert(`So luong hang khong du`)
       }else{
       products[findIndex].quantity -= amount
       let check = -1
        check = cart.findIndex(product => product.id === products[findIndex].id)
        if(check === -1){
       cart.push({ ...products[findIndex] })
          cart[cart.length - 1].quantity = amount
        }else{
           cart[check].quantity += amount
        }
         alert(`Mua thanh cong!`)  
       }
    }
   }
   function calTotal(){
    let total = 0;
    cart.forEach(product => {
      total += +product.price * +product.quantity
    })
    alert(`So tien can thanh toan: ${total} VND`)
  }
  function sortPhones(books){
    let subMenu = `
    a. Tăng dần.
    b. Giảm dần.`
    let subChoice = prompt(subMenu)
    switch(subChoice){
        case 'a':
           books.sort((a, b) => a.price - b.price)
           alert(`Sap xep thanh cong!`)
            break
        case 'b':
            books.sort((a, b) => b.price - a.price)
            alert(`Sap xep thanh cong!`)
            break
        default:
            alert("Lua chon khong hop le!");
    }
}
function calTotalInStock(){
    let total = 0;
    phones.forEach(product => {
      total += +product.price * +product.quantity
    })
    alert(`So tien can thanh toan: ${total} VND`)
  }
function displayQuantity(){
    phones.forEach(phone => {
        console.log(phone.company, "-", phone.quantity)
    })
}

  
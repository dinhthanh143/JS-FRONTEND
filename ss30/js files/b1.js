let choice;
let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    }
]
let cart = []
let menu = `
==============MENU================
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
==========================
Moi nhap lua chon: `;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        displayDish(products)
        break
    case 2:
        buyProduct()
        break
    case 3:
        sortProducts()
        break
    case 4:
        let result = calTotal()
        alert(`Tong tien thanh toan: ${result}`)
        break
    case 5:
        alert(`Da thoat chuong trinh!`)
        break;
    default:
        alert("Lua chon khong hop le!");     
  }
}
function displayDish(products){
    let searchCategory = prompt(`Moi nhap danh muc muon hien thi:`)
    let arr = products.filter(products => products.category == searchCategory)
    if(arr.length ===0){
        alert(`Khong co mon an nao nam trong danh muc nay`)
    }else{
      console.log(`==Danh sách các món trong danh mục ${searchCategory}:==`)
    arr.forEach(function(product){
        console.log(`ID : ${product.id}`)  
        console.log(`Name : ${product.name}`) 
        console.log(`Price : ${product.price}`) 
        console.log(`Quantity : ${product.quantity}`) 
        console.log(`==========================`) 
})   
    }
}

function buyProduct(){
 let choice = +prompt(`Moi nhap ID mon muon mua`)
 let findIndex = -1
 findIndex = products.findIndex(product=>product.id===choice)
 if(findIndex === -1){
    alert(`Khong co mon an nay trong cua hang`)
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
function sortProducts(){
    let subMenu = `
    a. Tăng dần.
    b. Giảm dần.`
    let subChoice = prompt(subMenu)
    switch(subChoice){
        case 'a':
           products.sort((a, b) => a.price - b.price)
           alert(`Sap xep thanh cong!`)
            break
        case 'b':
            products.sort((a, b) => b.price - a.price)
            alert(`Sap xep thanh cong!`)
            break
        default:
            alert("Lua chon khong hop le!");
    }
}
function calTotal(){
  let total = 0;
  cart.forEach(product => {
    total += +product.price * +product.quantity
  })
  return total
}

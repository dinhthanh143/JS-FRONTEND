let stock = [];
let choice;
let menu = `
1.Thêm sản phẩm vào danh sách sản phẩm.
2.Hiển thị tất cả sản phẩm.
3.Hiển thị chi tiết sản phẩm theo id.
4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5.Xóa sản phẩm theo id.
6.Lọc sản phẩm theo khoảng giá.
7.Thoát.
==========================
Moi nhap lua chon: `;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayStock(stock);
      break;
    case 3:
      searchById();
      break;
    case 4:
      updateItem();
      break;
    case 5:
      removeItem();
      break;
    case 6:
      let filteredArr = filterPrice();
      console.log(`Danh sach san pham da duoc loc:`)
      displayStock(filteredArr);
      break;
    case 7:
      alert(`Da thoat chuong trinh`);
      break;
    default:
      console.log("Lua chon khong hop le.");
  }
}
function addProduct() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhap ten san pham:");
  let price = +prompt("Nhap gia san pham:");
  let category = prompt("Nhap loai san pham:");
  let quantity = +prompt("Nhap so luong san pham");
  stock.push({ id, name, price, category, quantity });
}
function displayStock(stock) {
  console.log(`Danh sach San Pham:`);
  stock.forEach(function (item) {
    console.log(`===ID: ${item.id}===`);
    console.log(`Name: ${item.name}`);
    console.log(`Price: ${item.price}`);
    console.log(`Category: ${item.category}`);
    console.log(`Quantity: ${item.quantity}`);
    console.log(`=========================`);
  });
}
function searchById() {
  let search = prompt(`Moi nhap ID san pham: `);
  let check = false;
  for (let i in stock) {
    if (stock[i].id == search) {
      console.log(`===ID: ${stock[i].id}===`);
      console.log(`Name: ${stock[i].name}`);
      console.log(`Price: ${stock[i].price}`);
      console.log(`Category: ${stock[i].category}`);
      console.log(`Quantity: ${stock[i].quantity}`);
      console.log(`=========================`);
      check = true;
    }
  }
  if (check === false) {
    alert(`Khong tim thay san pham nay trong danh sach!`);
  }
}
function updateItem() {
  let search = prompt(`Moi nhap ID san pham muon cap nhat: `);
  let check = false;
  for (let i in stock) {
    if (stock[i].id == search) {
      let name = prompt("Nhap ten san pham:");
      let price = +prompt("Nhap gia san pham:");
      let category = prompt("Nhap loai san pham:");
      let quantity = +prompt("Nhap so luong san pham");
      stock[i].name = name;
      stock[i].price = price;
      stock[i].category = category;
      stock[i].quantity = quantity;
      check = true;
    }
  }
  if (check === false) {
    alert(`Khong tim thay san pham nay trong danh sach!`);
  }
}
function removeItem() {
  let search = prompt(`Moi nhap ID san pham muon xoa: `);
  let check = false;
  for (let i in stock) {
    if (stock[i].id == search) {
      alert(`Xoa san pham voi id ${search} thanh cong!`);
      delete stock[i];
      check = true;
    }
  }
  if (check === false) {
    alert(`Khong tim thay san pham nay trong danh sach!`);
  }
}
function filterPrice() {
  let start = +prompt(`Moi nhap gia toi thieu: `);
  let end = +prompt(`Moi nhap gia toi da: `);
  if (end <= start || isNaN(end) || isNaN(start)) {
    return "Khoang gia khong hop le";
  } else {
    let arr = [];
    for (let i in stock) {
      if (stock[i].price > start && stock[i].price < end) {
        arr.push(stock[i]);
      }
    }
    return arr;
  }
}

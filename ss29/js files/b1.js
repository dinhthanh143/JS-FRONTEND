let contacts = [];
let choice;
let menu = `
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.
==========================
Moi nhap lua chon: `;
while (choice !== 6) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        addContact();
      break;
    case 2:
        displayContacts();
      break;
    case 3:
        searchByPhone();
      break;
    case 4:
        searchById();
      break;
    case 5:
        removeContact()
      break;
    case 6:
      alert(`Da thoat chuong trinh!`);
      break;
    default:
      alert("Lua chon sai. Vui long nhap lai!");
  }
}
function addContact() {
  let id = Math.floor(Math.random() * 1000) + 1;
  let name = prompt("Nhap ten lien he:");
  let email = prompt("Nhap email lien he:");
  let phone = prompt("Nhap so dien thoai lien he:");
  contacts.push({ id, name, email, phone });
}
function displayContacts(){
    contacts.forEach(function(contact){
        console.log(`===ID: ${contact.id}===`)
        console.log(`Name: ${contact.name}`)
        console.log(`Email: ${contact.email}`)
        console.log(`Phone: ${contact.phone}`)
        console.log(`=========================`)
    })
}
function searchByPhone(){
    let search = prompt(`Moi nhap so dien thoai muon tra: `)
    let check = false
    for(let i in contacts){
        if(contacts[i].phone === search){
            alert(`
            ===ID: ${contacts[i].id}===
            Name: ${contacts[i].name}
            Email: ${contacts[i].email}
            Phone: ${contacts[i].phone}
            =========================`)
            check = true
        }
    }
    if(check === false){
        alert(`Khong tim thay so dien thoai nay trong danh sach!`)
    }
}
function searchById(){
    let search = prompt(`Moi nhap ID contact muon cap nhat: `)
    let check = false
    for(let i in contacts){
        if(contacts[i].id == search){
            let name = prompt("Nhap ten lien he:");
            let email = prompt("Nhap email lien he:");
            let phone = prompt("Nhap so dien thoai lien he:");
            contacts[i].name = name
            contacts[i].email = email
            contacts[i].phone = phone
            check = true
        }
    }
    if(check === false){
        alert(`Khong tim thay ID nay trong danh sach!`)
    }
}
function removeContact(){
    let search = prompt(`Moi nhap ID contact muon xoa: `)
    let check = false
    for(let i in contacts){
        if(contacts[i].id == search){
            delete contacts[i]
            alert(`Da xoa contact voi id: ${search}`)
            check = true
        }
    }
    if(check === false){
        alert(`Khong tim thay ID nay trong danh sach!`)
    }
}

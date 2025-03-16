let choice;
let employees = [];
while (choice !== 5) {
  choice = +prompt(`1.Thêm nhân viên mới.
2.Xóa nhân viên theo id.
3.Cập nhật mức lương của nhân viên theo id
4.Tìm kiếm nhân viên theo tên.
5.Thoát chương trình.
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
      employeeAdd();
      console.log(employees)
      break;
    case 2:
      removeEmployee();
      break;
    case 3:
        updateSalary();
      break;
    case 4:
        searchEmployee();
      break;
    case 5:
      break;
    default:
      alert(`Lua chon khong hop le! Moi nhap lai.`);
  }
}
function employeeAdd() {
  let n = +prompt(`Moi nhap so luong nhan vien muon them: `);
  if (n <= 0 || isNaN(n)) {
    alert(`So luong nhan vien khong hop le`);
    return;
  }
  for (let i = 0; i < n; i++) {
    let name = prompt(`Moi nhap ten nhan vien: `);
    let id = +prompt(`Moi nhap id nhan vien: `);
    let position = prompt(`Moi nhap vi tri nhan vien: `);
    let salary = +prompt(`Moi nhap luong nhan vien: `);
    employees.push({ id, name, position, salary });
  }
}
function removeEmployee() {
  let id = +prompt(`Moi nhap id nhan vien muon xoa: `);
  let check = false;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      let subChoice = +prompt(`
        [1] Xac nhan xoa nhan vien 
        [Any key] Thoat`);
      if (subChoice === 1) {
         check = true;
        delete employees[i];
        alert(`Xoa thanh cong!`)
        break
      } else {
        check = true
        break
      }
    }
  }
  if (check === false) {
    alert(`Nhan vien co id ${id} khong ton tai`);
  }
}
function updateSalary() {
    let id = +prompt(`Moi nhap id nhan vien muon cap nhat: `);
    let check = false;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        let newSalary = +prompt(`Moi nhap muc luong moi: `)
        employees[i].salary = newSalary
        check = true
      }
    }
    if (check === false) {
      alert(`Nhan vien co id ${id} khong ton tai`);
    }
  }
  function  searchEmployee(){
    let name = prompt(`Moi nhap ten nhan vien muon tim: `);
    let check = false;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name == name) {
        alert(`Thong tin nhan vien:
        ID: ${employees[i].id}
        Ten: ${employees[i].name}
        Vi tri: ${employees[i].position}
        Luong: ${employees[i].salary}`)
        check = true
      }
    }
    if (check === false) {
      alert(`Nhan vien co ten ${name} khong ton tai`);
    }
  }
  
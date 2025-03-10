let choice;
let arr = [];

while (choice !== 7) {
  choice = +prompt(`1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
==========================
Moi nhap lua chon:`);
  switch (choice) {
    case 1:
      let n = +prompt(`Nhap so luong phan tu muon them: `);
      if (isNaN(n) || n <= 0) {
        alert(`So luong khong hop le`);
        break;
      }
      for (let i = 0; i < n; i++) {
        let element = +prompt(`Moi nhap phan tu:`);
        if (isNaN(element)) {
          alert(`Phan tu khong phai la so!`);
          i--;
          continue;
        }
        arr.push(element);
      }
      break;
    case 2:
      alert(`Mang hien tai:
              ${arr}`);
      break;
    case 3:
      if (arr.length < 1) {
        alert(`Mang chua duoc nhap`);
        break;
      }
      let j;
      let max = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
          j = i;
        }
      }
      alert(`Phan tu lon nhat trong mang la: ${max}
           Chi so: ${j}`);
      break;
    case 4:
        if (arr.length < 1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let sum=0
          let avg=0
          for (let i = 0; i < arr.length; i++) {
            if(arr[i]>0){
                sum+=arr[i]
                avg ++
            }
          }
          avg = sum/avg
        alert(`Tong cua cac so duong trong mang: ${sum}
            Trung binh COng cac so duong trong mang: ${avg}`)
        break
    case 5:
        if (arr.length < 1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          arr= arr.reverse()
          alert(`Mang sau khi dao nguoc:
            ${arr}`);
            break
    case 6:
        if (arr.length < 1) {
            alert(`Mang chua duoc nhap`);
            break;
          }
          let check =true
           let arr2=[]
          arr2 = arr.reverse()
          let k = arr.length-1
          for (let i = 0; i < arr.length; i++) {
            if(arr[i]!==arr2[k]){
                check = false   
            }
             k--
          }
          if(check){
            alert(`Mang doi xung`)
          }else{
            alert(`Mang khong doi xung`)
          }
          arr= arr.reverse()
            break;
    case 7:
      alert(`Thoat chuong trinh thanh cong!`);
      break;
    default:
      alert(`Lua chon khong hop le!`);
  }
}

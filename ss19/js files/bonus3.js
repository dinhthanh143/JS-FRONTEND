let balance = +prompt(`Moi nhap so du(vnd): `);
let balance2 = balance.toLocaleString()
if (balance <= 0 || isNaN(balance)) {
  alert(`so du khong hop le.`);
} else {
  
  let option = +prompt(`Moi nhap lua chon: 
    [So du hien tai: ${balance2} VND]
    1.Rut tien 
    2.Nap tien`);
  switch (option) {
    case 1:
      let deposit = +prompt("moi nhap so tien muon rut: ");
      if (deposit > balance || isNaN(deposit)) {
        alert(`So du khong du!/so da nhap khong hop le!`);
      } else {
       
        balance = +balance - +deposit;
         balance = balance.toLocaleString();
        alert(`So du hien tai: ${balance} VND`);
      }
      break;
    case 2:
        let add = +prompt("moi nhap so tien muon nap: ");
        if (add < 0 || isNaN(add)){
            alert(`so tien muon nap khong hop le!`)
        }else{
            
            balance = balance + add;
            balance = balance.toLocaleString();
        alert(`So du hien tai: ${balance} VND`);
        }
        break

        default:
            alert(`lua chon khong hop le`)

  }
}

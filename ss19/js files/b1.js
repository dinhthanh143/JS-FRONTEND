let month = +prompt(`Moi nhap thang(1-12): `);
// if ( month===2 ){
//     alert(`Thang ${month} co 28 hoac 29 ngay nam nhuan`)
// }else if( month === 4 || month === 6 || month === 9 || month === 11 ){
//     alert(`Thang ${month} co 30 ngay `)
// }else if( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     alert(`Thang ${month} co 31 ngay `)
// }else{
//     alert(`Thang khong hop le`)
// }
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`Thang ${month} co 31 ngay `);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`Thang ${month} co 30 ngay `);
    break;
  case 2:
    alert(`Thang ${month} co 28 hoac 29 ngay nam nhuan`);
    break;
  default:
    alert(`Thang khong hop le`);
}

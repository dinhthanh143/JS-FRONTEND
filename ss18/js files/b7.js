let num1 = +prompt("Moi nhap so a: ");
let num2 = +prompt("Moi nhap so b: ");
let operator = prompt("Moi nhap phep tinh (+,-,*,/)");
let result=0;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if(num2===0){
        alert(`Mot so khong chia het duoc cho 0`)
    }else{
        result = num1 / num2;
    }
    break;
  default:
    alert(`Phep tinh khong hop le`)
}
if( result !== 0){
    alert(`Ket qua: ${num1} ${operator} ${num2} = ${result}`)
}

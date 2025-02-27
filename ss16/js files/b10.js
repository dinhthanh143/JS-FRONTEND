let num1 = parseInt(prompt(`moi nhap so thu nhat :`))
let num2 = parseInt(prompt(`moi nhap so thu hai :`))

let min = Math.min(num1, num2)
let max = Math.max(num1, num2)

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
alert(randomNumber)
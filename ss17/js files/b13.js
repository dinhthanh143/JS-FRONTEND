let amount = +prompt("moi nhap so tien muon gui")
let month = +prompt("moi nhap so thang muon gui")
let rate = month * (4.3/12)
let rateAmount = Math.round(amount* (rate/100))
rateAmount = rateAmount.toLocaleString()
alert(` so tien lai sau ${month} thang la: ${rateAmount} VND`)
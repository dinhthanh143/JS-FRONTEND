let amount = parseFloat(prompt(`Moi nhap so tien gui: `))
let rate = parseFloat(prompt(`Moi nhap lai suat 1 thang: `))
let month = +prompt(`Moi nhap so thang gui: `)

if( isNaN(month) || isNaN(rate) || isNaN(amount) || month<=0 || rate<=0 || amount<=0 ){
    alert(`Input khong hop le`)
}else{
    let amount_from_interest = month * ( amount * (rate/100))
    let amount_after_interest = amount + amount_from_interest
    alert(`Tien lai: ${amount_from_interest}
        Tien nhan duoc: ${amount_after_interest}`)
}

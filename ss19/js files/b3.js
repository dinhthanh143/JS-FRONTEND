let amount_vnd = +prompt(`Moi nhap VND muon doi sang USD`)
let result;
if ( amount_vnd <= 0 || isNaN(amount_vnd)){
    alert(`So tien nhap khong hop le`)
}else {
    result = amount_vnd/23000
    result= result.toFixed(2)
    alert(`${amount_vnd} VND = ${result} USD` )
}

let amount_usd = +prompt(`Moi nhap USD muon doi sang VND`)
if ( amount_usd <= 0 || isNaN(amount_usd)){
    alert(`So tien nhap khong hop le`)
}else {
    result = amount_usd*23000
    result = result.toLocaleString()
    alert(`${amount_usd} USD = ${result} VND` )
}

let d1 = prompt("moi nhap date thu nhat: ")
let d2 = prompt("moi nhap date thu hai: ")
const date1 = new Date(d1)
const date2 = new Date(d2)

const time = Math.abs(date2 - date1);
const date3 = time/86400000
alert(`do chenh lech giua 2 ngay la: ${date3}`)



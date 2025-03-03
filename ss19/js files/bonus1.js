let month = +prompt(`Moi nhap thang: `)
let year = +prompt(`Moi nhap nam: `)
if(month < 0 || year < 0 || isNaN(month) || isNaN(year)){
    alert(`So nam hoac thang nhap khong hop le`)
}else if( month === 4 || month === 6 || month === 9 || month === 11 ){
        alert(`Thang ${month} co 30 ngay `)
    }else if( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        alert(`Thang ${month} co 31 ngay `)
    }else if(month==2 && year%400==0 || month==2 && year%4==0 && year%100 != 0 ){
        alert(`Thang ${month} co 29 ngay `)
    }else if(month==2){
        alert(`Thang ${month} co 28 ngay `)
    }else{
        alert(`So nam hoac thang nhap khong hop le`)
    }

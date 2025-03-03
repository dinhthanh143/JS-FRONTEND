let a = +prompt(`Moi nhap so thu nhat: `)
let b = +prompt(`Moi nhap so thu hai: `)
let c = +prompt(`Moi nhap so thu ba: `)

if ( isNaN(a) || isNaN(b) || isNaN(c) ){
    alert(`co so khong hop le`)
}
// }else if(a>b && a>c){
//     alert(`so lon nhat la so ${a}`)
// }else if(b>a && b>c){
//     alert(`so lon nhat la so ${b}`)
// }else if(c>b && a<c){
//     alert(`so lon nhat la so ${c}`)
// }
let biggest = a>b ? (a>c? a : c ) : (b>c? b : c )

alert(`so lon nhat la ${biggest}`)
let arr= []
let check = true
for(let i=0; i<10; i++){
    let n= +prompt(`Moi nhap phan tu: `)
    arr.push(n)
    if(isNaN(n)) {
        check=false
    }
}
if(arr.length==0){
    console.log(`Mang khong co phan tu`)
}else if(check==false){
    console.log(`Du lieu khong hop le`)
}
else{
  let newArr = arr.filter(function(element, index){
    return element >= 10;
})
if(newArr.length===0){
    console.log(`mang khong co phan tu`)
}
console.log(newArr)
}



let filteredArr = inputStr()
console.log(filteredArr)
function inputStr(){
    let n = +prompt(`Moi nhap so luong email muon them: `)
    let arr =[]
    for(let i=0; i<n; i++){
        let str = prompt(`Moi nhap email thu ${i+1}: `)
        str = str.trim()
        let check1 = false
        let  check2 =false
        if(str.includes(" ")){
            check1 = true
        }
        if(str.includes("@") ){
            check2 = true
        }

        if(check2 && !check1){
            arr.push(str)
        }else{
            alert(`du lieu khong hop le!`)
        }
    }
    if(arr.length===0){
        console.log(`mang khong co phan tu`)
    }
    return(arr)
    
    
}
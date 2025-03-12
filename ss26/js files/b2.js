let filteredArr = inputStr()
console.log(filteredArr)
function inputStr(){
    let n = +prompt(`Moi nhap so chuoi muon them: `)
    let arr =[]
    for(let i=0; i<n; i++){
        let str = prompt(`Moi nhap chuoi thu ${i+1}: `)
        if(str.length<=5){
            alert(`Chuoi thu ${i+1} co do dai toi thieu la 6 ky tu. Chuoi nay khong duoc them vao mang.`)
            
        }
        arr.push(str)
    }
    let newArr = arr.filter(function(element, index){
        return element.length > 5
    })
    if(newArr.length===0){
        console.log(`mang khong co phan tu`)
    }
    return(newArr)
}
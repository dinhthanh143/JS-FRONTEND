let numbers =[1,5,7,9,3]

while(1){
    let find = false
    let guess = +prompt(`Moi nhap so muon doan: `)
    for(let i = 0; i<numbers.length;i++){
        if(guess === numbers[i]){
            find = true
        }   
    }
    if(find){
        alert(`Bingo`)
    }else{
        alert(`Chuc may man lan sau`)
    }
}
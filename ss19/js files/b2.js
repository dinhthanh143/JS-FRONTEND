let char = prompt(`Moi nhap ky tu can kiem tra: `)

if (char.length!==1){
    alert(`Day khong phai 1 ki tu`)
}else if( char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
    alert(`Ky tu la chu cai`)
}else{
    alert(`Ky tu khong la chu cai`)
}

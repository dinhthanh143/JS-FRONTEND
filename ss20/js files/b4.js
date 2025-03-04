let str = prompt(`Moi nhap chuoi: `)

  let char = prompt(`Moi nhap phan tu muon tim (1 ki tu): `) 
  if( char.length != 1){
  alert(`Chi duoc nhap 1 ki tu!`)
  }else{
   let find =false
for (i=0; i < str.length ; i++){
    if(str[i]==char){
        find = true
    }
}
if (find){
    alert(`ton tai phan tu can tim`)
}else {
    alert(`Khong ton tai phan tu can tim`)
} 
  }


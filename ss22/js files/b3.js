let arr = prompt(`Moi nhap day so bat ki: `)
if(isNaN(arr)){
    alert(`Day khong hop le`)
}else{
  let arr2=arr.split("")
arr2.reverse()
arr2 = arr2.join("")
alert(`Day so sau khi dao nguoc la: ${arr2}`)  
}


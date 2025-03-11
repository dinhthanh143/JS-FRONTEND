let arr = [2, 4, 8, 1, 9];
function findSmallest(arr) {
  if (arr.length < 1) {
    alert(`Mang khong chua phan tu`);
  } else {
    let min = arr[0]; 
    let count = 0
    for (let i = 1; i < arr.length; i++) {
    if(isNaN(arr[i])){
     return `Gia tri khong hop le`
    }    
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    if(count==arr.length){
        return `Gia tri khong hop le`
    }else{
         return `phan tu nho nhat la ${min}`;
    }
   
}
}
let min = findSmallest(arr);
alert(min)

let arr=[11,-4,65,-6]
findPos(arr)
function findPos (arr){
    let arr2=[]
    let count=0
    let check =false
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>0){
            arr2.push(arr[i])
            check = true
        }
    }
    if(check){
         alert(arr2)
    }else(
        alert(`Khong co so nguyen trong mang`)
    )
       
}
let arr=[11,4,65,6]
findEven(arr)
function findEven (arr){
    let arr2=[]
    let count=0
    for(let i = 0; i<arr.length;i++){
        if(isNaN(arr[i])){
            return `Gia tri khong hop le`
        }
        if(arr[i]%2==0){
            arr2.push(arr[i])
            
        }

    }
    if(arr2.length==0){
        alert(`Mang khong chua so chan`)
    }else if(count == arr.length){
        alert(`du lieu khong hop le`)
    }else{
        alert(arr2)
    }
}
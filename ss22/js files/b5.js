let arr = [4,6,9,3,8]
for(let num of arr){
    document.write(num)
    document.write(`<br>`)
}
let sum_odd = 0
let sum_even = 0
for(let i =0 ; i<arr.length;i++){
    if(arr[i]%2===0){
        sum_even += arr[i]
    }else{
        sum_odd += arr[i]
    }
}
alert(`Tong cac so chan: ${sum_odd}
    Tong cac so le: ${sum_even}`)

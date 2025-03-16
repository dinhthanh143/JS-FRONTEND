const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
calPrice(cart)
function calPrice(obj){
  let sum = obj.reduce(function (acc,cur){
    acc = acc+cur.price
    return acc
},0)
console.log(sum)  
}

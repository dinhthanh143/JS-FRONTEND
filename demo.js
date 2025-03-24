let products = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy A54",
      price: 7490000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
      id: 2,
      name: "Tai nghe AirPods Pro",
      price: 15990000,
      image:
        "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    },
    {
      id: 3,
      name: "Laptop Dell Inspiron 15",
      price: 4990000,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    },
    {
      id: 4,
      name: "Đồng hồ thông minh Apple Watch",
      price: 8990000,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    },
    {
      id: 5,
      name: "Máy ảnh Canon EOS M50",
      price: 12490000,
      image:
        "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
      id: 6,
      name: "Loa Bluetooth JBL Flip 5",
      price: 2190000,
      image:
        "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    },
    {
      id: 7,
      name: "Bàn phím cơ Logitech G Pro",
      price: 2490000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
      id: 8,
      name: "Chuột không dây Logitech MX Master",
      price: 1890000,
      image:
        "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    },
  ]; 
let buyBtn = document.querySelector(".buy")
let cart = []
let status = document.querySelector(".status")
let total = document.querySelector(".total")
let cartContainer = document.querySelector(".cart")
let container = document.querySelector(".container")
displayItems()
function displayItems(){
  products.forEach(product=>{
    container.innerHTML += `<div class="item">
    <img src="${product.image}" alt="">
    <span class="name">${product.name}</span>
    <span class="price">${product.price.toLocaleString()} đ</span>
    <button class="add" data-id="${
      product.id
    }">Thêm vào giỏ hàng</button>
</div>`;
  })

  document.querySelectorAll(".add").forEach((button) =>{
     button.onclick = function(){
      addItem(Number(this.getAttribute("data-id")));
    }
  }
   
  )
  updateCart()
}
function addItem(data_id){
  let product = products.find((product) => product.id === data_id)
  let cartProduct = cart.find((product )=> product.id === data_id)
 
  if(cartProduct){
    cartProduct.quantity++
  }else{
    cart.push({...product, quantity:1})
  }
  updateCart()
}
function updateCart(){
  cartContainer.innerHTML = ``
  if(cart.length ===0){
    cartContainer.style.display = "none"
    status.style.display = "block"
  }else{
    status.style.display = "none"
    cartContainer.style.display = "block"
    cart.forEach((item,index )=> {
    cartContainer.innerHTML += ` <div class="cart-item">
                      <span class="itemName">${item.name}</span>
                      <br>
                      <span class="itemPrice">${item.price.toLocaleString()} đ x <span class="quantity">${
        item.quantity
      }</span></span>
                      <div class="interact">
                          <button class="de" data-index="${index}">-</button>
                          <span class="quantity">${item.quantity}</span>
                          <button class="in" data-index="${index}">+</button>
                          <button class="del" data-index="${index}">X</button>
                      </div>
                      <hr>
                  </div>`;
    })
    document.querySelectorAll(".in").forEach(function(button){
      button.onclick = function(){
        changeQuantity(Number(this.getAttribute("data-index")), 1)
      }
    })
    document.querySelectorAll(".de").forEach(function(button){
      button.onclick = function(){
        changeQuantity(Number(this.getAttribute("data-index")), -1)
      }
    })
    document.querySelectorAll(".del").forEach(function(button){
      button.onclick = function(){
        removeItem(Number(this.getAttribute("data-index")))
      }
    })
    
  }
  calTotal()
}
function changeQuantity(index, amount){
  cart[index].quantity += amount
  if(cart[index].quantity<=0){
    cart.splice(index,1)
  }
  updateCart()
}
function removeItem(index){
  cart.splice(index,1)
  updateCart()
}
function calTotal(){
  let totalPrice = cart.reduce(function(acc,cur){
    return acc = acc+ cur.price*cur.quantity
  },0)
  total.innerText = `Tổng: ${totalPrice.toLocaleString()} đ`
  return totalPrice
}
buyBtn.onclick=function(){
  if(cart.length===0){
    alert(`Cart is empty`)
  }else{
    let totalPrice  = calTotal()
    alert(`Thanks for your purchase!
      Total : ${totalPrice.toLocaleString()}`)
      cart.length = 0
      updateCart()
  }

}
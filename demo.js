//bai 10 ss25//
let products = [
  ["mèn mén", 4, 20000],
  ["bánh bao", 3, 8000],
  ["bánh mì", 5, 10000],
];
let menu = `=====MENU=====
    1. Danh sach san pham
    2. Mua hang
    3. Tinh tien + hoa don
    4. Thoat
    Moi ban nhap lua chon:`;
let input
let cart
while (input !== 4) {
    input = +prompt(menu);
  switch (input) {
    case 1:
       displayProducts()
      break;
    case 2:
        let findProduct = prompt(`Moi nhap ten san pham muon mua`)
        let findIndex = -1
        for(let index in products){
            if(findProduct===products[index][0]){
                findIndex = index
            }
        }
        if(findIndex===-1){
            console.log(`San pham khong ton tai`)
        }else{
          let inCartIndex=-1
            for(let i in cart){
              if(cart[i][0]=findProduct){
                inCartIndex = i
              }
            }
            if(inCartIndex == -1){
              console.log(`San pham chua co trong gio hang`)
              let product = products[findIndex]
              let addProduct = [...product]
              cart.push(addProduct) 
              console.log(cart)
            }else{
              cart[inCartIndex][1] = cart[inCartIndex][1]+1;
            }
        }
      break;
    case 3:
          
        displayCart()
        console.log(`Tong tien: ${calculateTotal()}`)
      break;
    case 4:
        console.log(`Cam on da su dung ung dung`)
      break;
    default:
        console.log(`Lua chon khong hop le`)
  }
}
     
function calculateTotal(){
  let total = 0
  for(let i in cart){
    total += cart[i][2]*cart[i][1]
  }
  return total
}
                  
function displayProducts(){
    for ( let index in products){
            
        console.log(`${+index+1}. ${products[index]} - ${products[index][2]} - ${products[index][1]}`)    
    }
}
function displayCart(){
  for ( let index in cart){
          
      console.log(`${+index+1}. ${cart[index]} - ${cart[index][2]} - ${cart[index][1]}`)    
  }
}

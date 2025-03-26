let products = JSON.parse(localStorage.getItem('ss35_b3')) || []
  let container = document.getElementById('container');
  let btn = document.getElementById('searchBtn');
  let search = document.getElementById('search').value
btn.onclick = function(){
    render()
    let search = document.getElementById('search').value
    if(search ==""){
        displayItems()
    }else{
        products.forEach(function(product){
            let str1 = search.toLowerCase()
            let str2 = product.name.toLowerCase()
            if(str2.includes(str1)){
                product.price = product.price.toLocaleString();
                container.innerHTML +=`<div id="item">
                <img src="${product.image}" alt="">
                <b class="title">${product.name}</b>
                <p class="info">${product.description}</p>
                <span class="price">${product.price} VND</span>
                <button class="buy">Buy</button>`
            }
        })
    }
}
  displayItems();
  function displayItems(){
    products.forEach(product => {
        product.price = product.price.toLocaleString();
        container.innerHTML +=`<div id="item">
        <img src="${product.image}" alt="">
        <b class="title">${product.name}</b>
        <p class="info">${product.description}</p>
        <span class="price">${product.price} VND</span>
        <button class="buy">Buy</button>`
    })
}
function render(){
container.innerHTML =``
}
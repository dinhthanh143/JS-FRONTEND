let menu = JSON.parse(localStorage.getItem("ss36_b2"))
let container = document.querySelector(".container")
displayList()
function displayList(){
    container.innerHTML =` <h2>Bạn thích món nào nhất</h2>`
    menu.forEach(function(data,index){
        container.innerHTML +=`
             <div class="itemContainer">
                <img src="${data.img}" alt>
                <div class="itemInfo">
                    <span class="title">${data.name}</span>
                    <span class="likes" >❤️ ${data.likes} lượt thích</span>
                    <button class="likeBtn" data-index="${index}">Thích +1</button>
                </div>
            </div>`
    })
    document.querySelectorAll(".likeBtn").forEach((btn)=>{
        btn.addEventListener("click",function(){
           increaseLikes(Number(this.getAttribute("data-index"))) 
        })
    })
    localStorage.setItem("ss36_b2", JSON.stringify(menu))
}
function increaseLikes(index){
menu[index].likes ++
displayList()
}

let btn = document.getElementById("btn");
let list = document.getElementsByClassName("content");
btn.onclick = function(){
    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle("toggle");
    }
} 


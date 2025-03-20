let size = 15
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let content = document.getElementById('text');

increase.onclick = function(){
    size++
    content.style.fontSize = size+"px"
}
decrease.onclick = function(){
    size--
    content.style.fontSize = size+"px"
}

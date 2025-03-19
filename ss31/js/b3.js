let green = document.getElementById('green');
let red = document.getElementById('red');
let purple = document.getElementById('purple');
let body = document.getElementById('body');
green.onclick = function(){
    body.style.backgroundColor = 'green';
}
red.onclick = function(){
    body.style.backgroundColor = 'red';
}
purple.onclick = function(){
    body.style.backgroundColor = 'purple';
}

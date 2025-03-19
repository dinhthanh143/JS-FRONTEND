let text = document.getElementById('text');
let hide = document.getElementById('hide');
let show = document.getElementById('show');

hide.onclick = function(){
    text.style.display = 'none';
}
show.onclick = function(){
    text.style.display = 'block';
}
let div = document.getElementsByTagName('div')[0]
div.style.height = "30px"


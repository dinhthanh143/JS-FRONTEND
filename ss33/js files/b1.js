let mode = document.getElementById('mode');
let info = document.getElementById('input')
let toggle = false
mode.onclick = function (){
    if(toggle){
       info.removeAttribute('type')
       toggle = false
    }else{
      info.setAttribute('type', 'password')  
      toggle = true
    }
}

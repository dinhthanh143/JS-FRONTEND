let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let progress = document.getElementById('progress');
let body = document.getElementById('body');
let current = 20
let opacity = 30
progress.style.width = current+'%' 
body.style.opacity = opacity +'%'
increase.onclick = function(){
    current +=10
    opacity += 10
    if(current >100){
      current=100
      opacity = 100
    }else{
    body.style.opacity = opacity +'%'
    progress.style.width = current+'%'  
    }
}
decrease.onclick = function(){
    current -=10
    if(opacity === 10){
        opacity = 10
    }else{
       opacity -= 10 
    }
    if(current <0){
    current = 0
     opacity = 10
    }else{
    
    body.style.opacity = opacity +'%'
    progress.style.width = current+'%'  
    }
}
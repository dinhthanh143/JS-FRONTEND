let mode = document.getElementById("mode-icon");
let body = document.getElementsByTagName("body")[0];
let current = JSON.parse(localStorage.getItem("ss36_b4"))
if(current == "light"){
    body.classList.remove("dark-mode");
}else if(current == "dark"){
    body.classList.add("dark-mode");
}

mode.onclick = function(){
    if(current == "light"){
        body.classList.add("dark-mode");
        current = "dark"
    }else{
        body.classList.remove("dark-mode");
        current = "light"
    }
    localStorage.setItem("ss36_b4", JSON.stringify(current))
}

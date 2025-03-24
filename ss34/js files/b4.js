
let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');

let works = JSON.parse(localStorage.getItem('b4'))|| [];
displayWorks()
function displayWorks(){
list.innerHTML = ""
 works.forEach(function(work,index){
     list.innerHTML += `<li>${work} <button class="del" data-index="${index}">X</button></li>`
})
document.querySelectorAll('.del').forEach(btn =>{
    btn.onclick = function(){
    deleteWork(Number(this.getAttribute('data-index')))
    }
})
 localStorage.setItem('b4', JSON.stringify(works))
}
function deleteWork(index){
    works.splice(index, 1)
    displayWorks()
}
addBtn.onclick = function(){
    let inputTask = document.getElementById('inputTask').value
    if(inputTask==""){
        alert("Nhiệm vụ không được để trống")
    }else{
        works.push(inputTask)
    }
    displayWorks()
}
 
 





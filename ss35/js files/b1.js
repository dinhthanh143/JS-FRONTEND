
let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');

let works = JSON.parse(localStorage.getItem('ss35_b1'))|| [];
displayWorks()
function displayWorks(){
list.innerHTML = ""
 works.forEach(function(work,index){
     list.innerHTML += `<li>${work} 
            <div class="buttonContainer">
                <button class="fix" data-index="${index}">Sửa</button><button class="del" data-index="${index}">Xoá</button>
            </div>
            </li>`
})
document.querySelectorAll('.del').forEach(btn =>{
    btn.onclick = function(){
    deleteWork(Number(this.getAttribute('data-index')))
    }
})
document.querySelectorAll('.fix').forEach(btn =>{
    btn.onclick = function(){
    fixWork(Number(this.getAttribute('data-index')))
    }
})
 localStorage.setItem('ss35_b1', JSON.stringify(works))
}

function fixWork(index){
    works[index]= prompt(`Moi nhap cong viec moi:`)
    displayWorks()
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
 
 





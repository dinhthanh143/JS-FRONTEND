let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    },
];
 
let ul = document.getElementById('myUL');
 let btn = document.getElementById('btn')
 displayAll(todoList)
 function displayAll(todoList){
   todoList.forEach(function(task,index) {
    if(task.completed===true) {
        ul.innerHTML += ` <li class="checked">${task.task}
        <span class="close" " >X</span></li >
    ` 
    }else{
        ul.innerHTML += ` <li >${task.task}
            <span class="close" ">X</span></li >
        ` 
    }
       
})   
 }
function deleteTask(){
    let deleteBtn = document.querySelectorAll('.close')
    deleteBtn.forEach(function(btn){
        btn.onclick = function(){
            btn.parentElement.remove()
        }
    })
}
deleteTask()

function addInfo(){
let value = document.getElementById('myInput').value
let id = todoList.length++
let task = value
let completed = false
todoList.push({id,task,completed})   
}
function add(){
    if(todoList[todoList.length-1].completed===true) {
        ul.innerHTML += ` <li class="checked">${todoList[todoList.length-1].task}
        <span class="close">X</span></li >
    ` 
    }else{
       ul.innerHTML += ` <li >${todoList[todoList.length-1].task}
            <span class="close">X</span> </li >
        ` 
    }
}
btn.onclick = function(){
    addInfo()
    add()
    deleteTask()
}



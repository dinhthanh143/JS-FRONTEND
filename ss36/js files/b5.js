let pendingList = JSON.parse(localStorage.getItem("pendingList")) || []
let doneList = JSON.parse(localStorage.getItem("doneList")) || []
let inProgressList = JSON.parse(localStorage.getItem("inProgressList")) || []

let taskName = document.getElementById('taskName')
let addBtn = document.querySelector('.add')
let pendingCol = document.querySelector(`#pendingCol`)
let inProgressCol = document.querySelector(`#inProgressCol`)
let doneCol = document.querySelector(`#doneCol`)
addBtn.addEventListener('click',function(){
let task = taskName.value
if(task === ""){
    alert(`Task name must not be empty`)
}else{
    pendingList.push(task)
    displayPending()
}
})
displayDone()
displayInProgress()
displayPending()
function displayPending(){
    pendingCol.innerHTML = `   <h3>🕐 Chờ xử lý</h3>`
    pendingList.forEach((task,index)=>{
        pendingCol.innerHTML +=`
         <div id="pendingTasks">${task}
          <button class="next_progress next" data-index="${index}">Chuyển tiếp</button>
        </div>`
    })
    document.querySelectorAll(".next_progress").forEach((btn)=>{
btn.onclick = function(){
    toProgress(Number(this.getAttribute("data-index")))
}
})
localStorage.setItem("pendingList", JSON.stringify(pendingList))
}
function displayInProgress(){
    inProgressCol.innerHTML = `   <h3>🔨 Đang làm</h3>`
    inProgressList.forEach((task,index)=>{
        inProgressCol.innerHTML +=`
          <div id="inProgressTasks">${task}
          <button class="next_done next" data-index="${index}">Chuyển tiếp</button>
        </div>`
    })
    document.querySelectorAll(".next_done").forEach((btn)=>{
    btn.onclick = function(){
        toDone(Number(this.getAttribute("data-index")))
    }
    })
    localStorage.setItem("inProgressList", JSON.stringify(inProgressList))

}
function displayDone(){
   doneCol.innerHTML = ` <h3>✅ Hoàn thành</h3>`
    doneList.forEach((task,index)=>{
        doneCol.innerHTML +=`
          <div id="doneTasks">
          ${task}
        </div>`
    })
    localStorage.setItem("doneList", JSON.stringify(doneList))

}


function toProgress(index){
        inProgressList.push(pendingList[index])
        pendingList.splice(index,1)
        displayPending()
        displayInProgress()
    }
function toDone(index){
    doneList.push(inProgressList[index])
    inProgressList.splice(index,1)
    displayInProgress()
    displayDone()
}



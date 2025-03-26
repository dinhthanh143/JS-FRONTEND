let links = JSON.parse(localStorage.getItem('ss35_b2'))|| []

let addBtn = document.querySelector('.add')
let save = document.querySelector('.save')
let cancel = document.querySelector('.cancel')
let container = document.querySelector('.websites')
let addContainer = document.querySelector('.addContainer')
let body = document.getElementById('body')
addContainer.classList.toggle('hide')
displayLinks()
function displayLinks(){
    container.innerHTML=''
links.forEach(function(link,index){
     container.innerHTML +=`    
            <section class="toLink" data-index="${index}">
            <img src="${link.url}/favicon.ico" alt="">
            ${link.name}
            <button class="del" data-index="${index}">x</button></section>
        `
 })
 document.querySelectorAll('.del').forEach(btn =>{
    btn.onclick = function(){
    deleteLink(Number(this.getAttribute('data-index')))
    }
 })
 document.querySelectorAll('.toLink').forEach(btn =>{
    btn.onclick = function(event){
        if(event.target==btn){
       directToLink(Number(this.getAttribute('data-index')))     
        }
    }
 })
localStorage.setItem('ss35_b2',JSON.stringify(links))
}
function directToLink(index){
    
window.location.href = `${links[index].url}`
}
function deleteLink(index){
    links.splice(index,1)
    displayLinks()
}
addBtn.onclick = function(){
body.classList.toggle('overlay')
addContainer.classList.toggle('hide')


}
save.onclick = function(){
    let name = document.getElementById('name').value
    let url = document.getElementById('url').value
    if(name==='' || url===''){
        alert(`Invalid input`)
    }else{
      links.push({name,url})  
    }
    body.classList.toggle('overlay')
    addContainer.classList.toggle('hide')
    displayLinks()
}
cancel.onclick = function(){
    body.classList.toggle('overlay')
    addContainer.classList.toggle('hide')
}
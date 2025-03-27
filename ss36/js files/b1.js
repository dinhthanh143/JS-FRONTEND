let title = document.getElementsByTagName('h1')[0]; 
let save = document.querySelector('.save');
let change = document.querySelector('.change');
let inputName = document.getElementById('name')
let name = JSON.parse(localStorage.getItem('ss36_b1'));
let check = JSON.parse(localStorage.getItem('36_1_check'));
if(check == null){
    title.innerText = `Nhập tên của bạn`
    inputName.classList.remove('hide')
    save.classList.remove('hide')
}else{
    title.innerText = `👋 Chào bạn, ${name}`
    inputName.classList.add('hide')
    save.classList.add('hide')
    change.classList.toggle('hide')
}
save.onclick = function(){
  let value = inputName.value 
  if(value==''){
    alert('Please enter your name')
  }else{
    name = value
    title.innerText = `👋 Chào bạn, ${name}`
    inputName.classList.toggle('hide')
    save.classList.toggle('hide')
    change.classList.toggle('hide')
    check = true
  localStorage.setItem('36_1_check', JSON.stringify(check)) 
   localStorage.setItem('ss36_b1', JSON.stringify(name)) 
  }
}
change.onclick = function(){
    title.innerText = `Nhập tên của bạn`
    inputName.classList.toggle('hide')
    save.classList.toggle('hide')
    change.classList.toggle('hide')
    check = false
}
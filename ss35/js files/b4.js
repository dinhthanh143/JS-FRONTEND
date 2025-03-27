let addBtn = document.getElementById('btn');
let table = document.getElementById('table');


let data = [
 {id: 1,
    name: "John Doe",
    position: "CEO"
 },
 {id: 2,
    name: "Jane Smith",
    position: "Secretary"
 },
 {id: 3,
    name: "Roblox",
    position: "Marketing Strategist"
 }
]

data = JSON.parse(localStorage.getItem('b5'))|| [];
displayDatas()
function displayDatas(){
   table.innerHTML = ` <tr class="thead">
        <td>STT</td>
        <td>Tên</td>
        <td>Chức vụ</td>
    </tr>`;
   data.forEach((item,index )=> {
      item.id = index+1
   table.innerHTML +=`  
   <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.position}</td>
    </tr>
   `
   });
   localStorage.setItem("b5", JSON.stringify(data))
}
addBtn.onclick = function(){
   let id = data.length + 1;
   let name = document.getElementById('name').value
   let position = document.getElementById('position').value
if(name === '' || position === ''){
alert(`Please fill the name and position`)
}else{
   data.push({id,name,position})
}
displayDatas()
}

let pagination = document.querySelector('.pagination')
//pagination 
//giao dien cua cac trang :
let totalPage = 4
let pageSize = 3
let currentPage = 1;
pagination.innerHTML =`   <li class="page-item"><a class="page-link" href="#">Previous</a></li>`
for(let i =1; i<=totalPage;i++){
    //them class active-page
    let li =`  <li class="page-item"><a class="active-page page-link" href="#">${i}</a></li>`
   pagination.innerHTML += li
}
pagination.innerHTML +=`<li class="page-item"><a class="page-link" href="#">Next</a></li>`
let activePages = document.getElementsByClassName("active-page")

let list = []
let start = (currentPage - 1)*pageSize 
let end = start + pageSize -1
if(end>= data.length-1){

}
for(let i = start; i<=end;i++){
    list.push(data[i])
}

function display(){
    table.innerHTML = ` <tr class="thead">
    <td>STT</td>
    <td>Tên</td>
    <td>Chức vụ</td>
</tr>`;
list.forEach((item,index )=> {
  item.id = index+1
table.innerHTML +=`  
<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.position}</td>
</tr>
`
});
}




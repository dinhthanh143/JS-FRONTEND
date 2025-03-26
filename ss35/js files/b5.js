let datas = JSON.parse(localStorage.getItem("ss35_b5+6"))
let list = document.querySelector(".list");
let body = document.getElementsByTagName("body")[0];
let addBtn = document.querySelector(".add");
let filterStatus = document.querySelector(".status");
let searchName = document.querySelector(".search");
let addCategory = document.querySelector(".addCategory");
let addCategory_cancel = document.querySelector(".addCategory_cancel");
let addCancel = document.querySelector(".addCancel");
let addConfirm = document.querySelector(".addConfirm");

let idInput = document.getElementById("id")
let nameInput = document.getElementById("name")  
let dataCheck =document.querySelectorAll(".dataCheck")


addBtn.addEventListener("click", function () {
  addDisplay();
  idInput.classList.remove("invalid");
nameInput.classList.remove("invalid");
dataCheck[0].style.display = "none"; 
dataCheck[1].style.display = "none"; 
dataCheck[2].style.display = "none"; 
});
addCancel.addEventListener("click", function () {
  addDisplay();
});
addCategory_cancel.addEventListener("click", function () {
  addDisplay();
  idInput.classList.remove("invalid");
nameInput.classList.remove("invalid");
});
function addDisplay() {
  body.classList.toggle("focused");
  searchName.classList.toggle("focused");
  filterStatus.classList.toggle("focused");
  let tHead = document.querySelector("#th");
  if (tHead) {
    tHead.classList.toggle("th_bg");
  }
  addCategory.classList.toggle("display");
}
 addConfirm.onclick = function () {
let id = document.getElementById("id").value
let name = document.getElementById("name").value
let statusValue = document.querySelector('input[name="addStatus"]:checked')?.value

let isValid = true;
dataCheck.forEach(msg => msg.style.display = "none");
idInput.classList.remove("invalid");
nameInput.classList.remove("invalid");

if (id === "") {
    idInput.classList.add("invalid");
    dataCheck[0].style.display = "block"; 
    isValid = false;
}

if (name === "") {
    nameInput.classList.add("invalid");
    dataCheck[1].style.display = "block"; 
    isValid = false;
}
if (!isValid) return; 
let statusTitle = statusValue === "online" ? "Đang Hoạt Động" : "Ngừng Hoạt Động";
let status = statusValue === "online" ? "onlineCss" : "offlineCss";
let color = statusValue === "online" ? "circleGreen" : "circleRed";
datas.push({ id, name, statusTitle, status, color });
displayList();

idInput.value = "";
nameInput.value = "";
document.querySelector('input[name="addStatus"]:checked').checked = true;
let tHead = document.querySelector("#th");
  if (tHead) {
    tHead.classList.toggle("th_bg");
  }
addDisplay(); 
}

displayList();
function displayList() {
  list.innerHTML = `  <tr id="th">
                <td>Mã danh mục <i class="fa-solid fa-arrow-down"></i></td>
                <td>Tên danh mục<i class="fa-solid fa-arrow-down"></i></td>
                <td class="statusRow">Trạng thái</td>
                <td class="funcRow">Chức năng</td>
            </tr>`;
  datas.forEach(function (data,index) {
    list.innerHTML += `
                <tr class="tRow">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td><span class="${data.status}">
                    <i class="fa-solid fa-circle ${data.color}"></i>${data.statusTitle}
                </span>
                </td>
                <td class="funcRow"><i class="fa-solid fa-trash" data-index="${index}"></i>
                    &nbsp &nbsp <i
                        class="fa-solid fa-pen"></i></td>
            </tr>`;
  });
  document.querySelectorAll('.fa-trash').forEach(function (btn){
btn.onclick = function(){
    deleteData(Number(this.getAttribute('data-index')))
}
  })
  localStorage.setItem('ss35_b5+6', JSON.stringify(datas))
}
function deleteData(index){
datas.splice(index,1)
displayList()
}

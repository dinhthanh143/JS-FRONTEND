let dish = [
  { name: "Rau sạch", category: "Đồ ăn" },
  { name: "Thịt lợn", category: "Đồ ăn" },
  { name: "Pepsi không calo", category: "Nước" },
  { name: "Cocacola", category: "Nước" },
  { name: "Cờ lê", category: "Dụng cụ" },
  { name: "Tuy vít", category: "Dụng cụ" },
];

let btn = document.getElementById("btn");
let ul = document.getElementById("myUL");
let select = document.getElementById("categories").value;
dish.forEach(function (item) {
  ul.innerHTML += `<li class="render">
        <b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}
    </li>`;
});

btn.onclick = function () {
  renderList();
  let select = document.getElementById("categories").value;
  if (select == "Food") {
    dish.forEach(function (item) {
      if (item.category == `Đồ ăn`)
        ul.innerHTML += `<li class="render">
            <b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}
        </li>`;
    });
  } else if (select == "Drinks") {
    dish.forEach(function (item) {
      if (item.category == `Nước`)
        ul.innerHTML += `<li class="render">
            <b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}
        </li>`;
    });
  } else if (select == "Tools") {
    dish.forEach(function (item) {
      if (item.category == `Dụng cụ`)
        ul.innerHTML += `<li class="render">
            <b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}
        </li>`;
    });
  } else {
    dish.forEach(function (item) {
      ul.innerHTML += `<li class="render">
            <b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}
        </li>`;
    });
  }
};
function renderList() {
  ul.innerHTML = "";
}

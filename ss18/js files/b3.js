let user = prompt("Moi nhap ten: ");
if (user === "ADMIN") {
    let password = prompt("Moi nhap mat khau: ")
if(password==="TheMaster"){
    alert(`Welcome`)
}else if(password===""){
    alert(`Cancelled`)
}else{
    alert(`Wrong password`)
}
} else if (user === "") {
  alert(`Cancelled`);
} else {
  alert(`I dont know you`);
}

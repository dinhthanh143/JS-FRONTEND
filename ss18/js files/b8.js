let edge1 = +prompt("Moi nhap canh thu nhat: ");
let edge2 = +prompt("Moi nhap canh thu hai: ");
let edge3 = +prompt("Moi nhap canh thu ba: ");
if (
  edge1 <= 0 ||
  edge2 <= 0 ||
  edge3 <= 0 ||
  edge1 + edge2 < edge3 ||
  edge3 + edge2 < edge1 ||
  edge1 + edge3 < edge2 ||
  isNaN(edge1) ||
  isNaN(edge2) ||
  isNaN(edge3)
) {
  alert(`Tam giac khong hop le`);
} else if (edge1 === edge2 && edge2 === edge3) {
  alert(`Day la tam giac deu`);
} else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
  alert(`Day la tam giac can`);
} else if (
  edge1 * edge1 + edge2 * edge2 === edge3 * edge3 ||
  edge1 * edge1 + edge3 * edge3 === edge2 * edge2 ||
  edge2 * edge2 + edge3 * edge3 === edge1 * edge1
) {
  alert(`Day la tam giac vuong`);
} else {
  alert(`Day la tam giac thuong`);
}

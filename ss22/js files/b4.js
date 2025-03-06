let arr = prompt(`Moi nhap day so bat ki: `);

if (isNaN(arr)) {
  alert(`Day khong hop le`);
} else {
  let arr2 = arr.split("");
  let max = 0;
  let i
  for (i = 0; i < arr2.length-1; i++) {
    if (arr2[i+1] > max) {
      max = arr2[i+1];
    }
  }
  alert(`${max} la so lon nhat trong day`);
}

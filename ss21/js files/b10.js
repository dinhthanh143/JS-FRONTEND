let num = +prompt(`Moi nhap luong so nguyen to muon in: `);
let count = 2;
let check = 0;
while (check < num) {
  let isPrime = true
  for ( let i = 2; i <= Math.sqrt(count); i++) {
    if (count % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(count)
    check++
  }
  count++
}

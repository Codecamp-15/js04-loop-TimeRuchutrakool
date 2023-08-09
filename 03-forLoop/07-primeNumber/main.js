// 1 2 3 5 7 11 13 17 19 23 29 ...

const n = 100;

for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) console.log(i);
}

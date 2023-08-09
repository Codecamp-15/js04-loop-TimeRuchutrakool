// 1 2 3 5 7 11 13 17 19 23 29 ...

// for (let i = 1; i <= 100; i++) {
//   let count = 0;
//   for (let j = 1; j <= 100; j++) {
//     if (i % j === 0) {
//       count++;
//     }

//     if (i === j) break;
//   }
//   if (i !== 1 && count <= 2) console.log(i);
// }

for (let i = 1; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) console.log(i);
}

// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
let sum = 0;
let oddSum = 0;
let evenSum = 0;
let sumOfCanDividedByTwoWithPow = 0;
let sumOfCanDividedByThreeWithPow = 0;
let sumOfMess = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
  if (i % 2 === 0) {
    evenSum += i;
    sumOfCanDividedByTwoWithPow += Math.pow(i, 2);
  }
  if (i % 2 !== 0) {
    oddSum += i;
  }
  if (i % 3 === 0) {
    sumOfCanDividedByThreeWithPow += Math.pow(i, 3);
  }
}
sumOfMess = sumOfCanDividedByTwoWithPow - sumOfCanDividedByThreeWithPow;

console.log(sum);
console.log(oddSum);
console.log(evenSum);
console.log(sumOfCanDividedByTwoWithPow);
console.log(sumOfCanDividedByThreeWithPow);
console.log(sumOfMess);

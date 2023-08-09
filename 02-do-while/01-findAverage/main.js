// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

//
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7
// ELSE
//     PRINT sum
//     PRINT average
//

let input;
let sum = 0;
let count = -1;
do {
  input = prompt("Enter number");

  sum += +input;
  count++;
  console.log(sum, count);
} while (input !== "" && !isNaN(+input) && +input > 0);

console.log(`Sum: ${isNaN(sum) ? "0" : sum}`);
console.log(`Avg: ${isNaN(sum) ? "0" : (sum / count).toFixed(2)}`);

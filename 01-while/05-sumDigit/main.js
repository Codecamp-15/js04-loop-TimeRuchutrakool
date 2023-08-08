const input = prompt("Enter number");

if (input === "" || isNaN(+input)) {
  alert("Please Enter number");
} else {
  let i = 0;
  let sum = 0;
  while (i < input.length) {
    sum += +input[i];
    i++;
  }
  console.log(sum);
}

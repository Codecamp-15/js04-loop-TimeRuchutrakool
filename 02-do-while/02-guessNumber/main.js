const guessNumber = prompt("Enter guess number");

if (
  guessNumber !== "" &&
  !isNaN(guessNumber) &&
  +guessNumber >= 1 &&
  +guessNumber <= 99
) {
  let answer;
  let stillGuess = true;
  let count = 1;
  do {
    answer = prompt("Enter answer");
    if (answer !== "" && !isNaN(answer) && +answer > 0) {
      if (+guessNumber === +answer) {
        alert(`Correct with ${count} attempts`);
        stillGuess = false;
      } else if (+guessNumber > +answer) {
        alert("more than");
      } else {
        alert("less than");
      }
    } else {
      alert("Invalid Range");
      break;
    }

    count++;
  } while (stillGuess);
} else alert("Invalid Range");

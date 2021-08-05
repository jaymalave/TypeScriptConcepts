console.log("Hello World in the log");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

let randomNumber: number;
let number1 = 5;
const number2 = 2.8;
let printResult = true;
let phraseResult = "Result is: ";

add(number1, number2, printResult, phraseResult);

console.log(typeof number1);



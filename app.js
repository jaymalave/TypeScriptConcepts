console.log("Hello World in the log");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phraseResult = "Result is: ";
add(number1, number2, printResult, phraseResult);
console.log(typeof number1);

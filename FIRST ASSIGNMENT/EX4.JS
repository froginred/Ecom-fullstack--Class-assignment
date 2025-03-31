//EX4 - Fizzbuzz
// to run the fizzbuz i can run it with 3 if statements, a modulus, and an "and" operator for the fizzbuzz, as the following:
// this is a kind of quick brute force:
// console.log(" ");
// console.log("EX4 -  Simple fizzbuzz:");
// for (let i = 1; i <= 45; i ++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz'); }
//     else if (i % 5 == 0) {
//         console.log('Buzz'); }
//     else if (i % 3 == 0) {
//         console.log('Fizz'); }
//     else {
//         console.log(i); }
//     }

// However, i wanted to try and make it simpler, with lesss statements.
//now i only need 1 more statement for each added number instead of n+1 for each new number
console.log(" ");
console.log("EX4 - more scalable fizzbuzz:");
for (let i = 1; i <= 45; i ++) {
    let print = ""
    if (i % 3 == 0) {
    print += "Fizz"; }
    if (i % 5 == 0) {
    print += "Buzz"; }
//   EXAMPLE:
    // if (i % 2 == 0) {
    // print += "BOOM"; }
    console.log(print || i);
}
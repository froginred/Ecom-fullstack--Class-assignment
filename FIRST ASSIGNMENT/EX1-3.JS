//EX1
// the simplest "for" loop that takes all the numbers from 12 to 24, when "i" starting condition is 12
console.log("EX1:");
for (let i = 12; i <= 24; i++) {
    console.log(i)
}

//EX2
// I took the the simplest "for" to run from 7 to 31, and added a modulus condition.
// the easiest way will be to forward "i" by 2, thus only generating ODD numbers, but for challange sakes:
// the if checks the remeinder of 2, if its not 0 - its an ODD number.
console.log(" ");
console.log("EX2:");
for (let i = 7; i <= 31; i++) {
    if (i % 2 != 0 ) {
      console.log(i)
    }

}


//EX3
// the same as before, only changing few parametes (i runs negatively, modulus =0 for even numbers.)
console.log(" ");
console.log("EX3:");
for (let i = 10; i >= -20; i --) {
    if (i % 2 == 0 ) {
      console.log(i)
    }
}

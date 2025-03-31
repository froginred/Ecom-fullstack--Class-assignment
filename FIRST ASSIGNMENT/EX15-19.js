console.log("EX15 - While counter :");

// Write a while loop that iterates as long as the counter is less than 100, on every iteration

let counter = 1;
while ( counter < 100) {
    counter = counter * 2;
    console.log(counter);
}

console.log("------------");
console.log(" ");
console.log("EX16 :");

counter = 900000;
while (counter > 50) {
    counter = Math.floor(counter /2); //assumed that the counter needs to be a whole number.
    // Added this code to show, didnt understand if the instructions meant to stop before 5o or after.
    // if (counter <= 50) {
    //     break;
    // }
    console.log(counter);
}

console.log("------------");
console.log(" ");
console.log("EX17 : name copier");

// Complete the code.
// Use a while loop to add in the array copiedNames the names that appear in the names
// array.
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames = [];
let index = 0;
while (index < names.length) {
    copiedNames.push(names[index]);
    // console.log(`Added ${names[index]}!`) // a test 
    index ++;
}
console.log(copiedNames); // => ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']

console.log("------------");
console.log(" ");
console.log("EX18 : the Pete exclusion");

copiedNames = [];
index = 0;

while (index < names.length) {
    if (names[index] == "Pete"){
        break;
    }else{
        copiedNames.push(names[index]);
    }
    // console.log(`Added ${names[index]}!`) // a test 
    index ++;
    }
console.log(copiedNames);


console.log("------------");
console.log(" ");
console.log("EX19 : true or false");

let array1 = [true, false, false, true, true, false]; //-> returns 2
let array2 = [true, false, true, false, true, true]; //-> returns 5
let array3 = [true, false, true, false, true, false]; //-> returns -1


function isSuccesive(arry){
    index = 0;
    while (index < arry.length){
        if (arry[index] == arry[index -1]){
            return index;
            break;
        }
        index++
    }
    return -1;
}
 
console.log(isSuccesive(array1));
console.log(isSuccesive(array2));
console.log(isSuccesive(array3));
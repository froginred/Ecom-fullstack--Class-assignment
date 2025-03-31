// Ex9:

console.log("EX9:");

var arr = [[1, 2], 
           [3, 4], 
           [5, 6]];

function printArray (arry)  {
    let print = "";
    for (i = 0; i < arry.length ; i++){
        for (j = 0; j < arry[i].length ; j++){
            print += arry[i][j] + " ";
        }
    }
    console.log(print);
}

printArray(arr);    

console.log("------------");
console.log(" ");
console.log("EX10 :");

var arr = [[0,1,1],[0,1,0],[1,0,0]]; 

function zeroCount (arry)  {
    let zeroes = 0;
    for (i = 0; i < arry.length ; i++){
        for (j = 0; j < arry[i].length ; j++){
            if (arry[i][j] == 0){
                zeroes++
            }
        }
    }
    console.log(zeroes);
}

zeroCount(arr);

console.log("------------");
console.log(" ");
console.log("EX11 :");
// Write a function to return all the elements that are repeated more than once in a given array.

var arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDup(arry) {
    let dupes = [];
    for (i = 0; i < arry.length ; i++){
        for (j = 0; j < arry.length ; j++){
            //checks: 1.) same number vlue, 2.) not the same index and 3.) dupes array doesnt includes this number already
            if (arry[i]== arry[j] && i !== j &&!dupes.includes(arry[i])){
                dupes.push(arry[i])
            }
        }       
    }
    console.log(dupes);
}
    
findDup(arr);


console.log("------------");
console.log(" ");
console.log("EX12 :");

// Write a function using a for loop that gets an array and returns a new array with the elements
// from the given array appearing in reverse order. (Don’t use array reverse() method)

arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function arrReverse(arry) {
    let reversed = [];
    for (i = 0 ; i < arry.length ; i++ ){
        reversed.unshift(arry[i]);
    }
    console.log(reversed);
}

arrReverse(arr);


console.log("------------");
console.log(" ");
console.log("EX13 - sum machine :");


// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

function sumMachine(arr1,arr2){
    sum = [];
    for (i = 0; i < arr1.length ; i++){
        sum.push(arr1[i]+arr2[i]);
    }
    console.log(sum);
}
sumMachine(arr_3,arr_4)


console.log("------------");
console.log(" ");
console.log("EX14 - Palindromes :");

// Write a program that will check if two strings are palindromes. A palindrome is a word that
// spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.

let str1 = "madam";
let str2 = "Nurses run";
let str3 = "racecar";
let str4 = "Java";
let str5 = "Murder for a jar of red rum";

function palindrome(string){
    //because the example showed whitespace, i will first remove it to handle
    console.log( `is "${string}"a palindrome?`)
    string = string.toLowerCase().replaceAll(/\s+/g, '');
    //now to check if the reversed string is equal to the original
    let reversed = string.split("").reverse().join("");
    if (string == reversed) {
        console.log("Yes!")
    }else{
        console.log("No :(")
    }   
}

palindrome(str1);
palindrome(str2);
palindrome(str3);
palindrome(str4);
palindrome(str5);
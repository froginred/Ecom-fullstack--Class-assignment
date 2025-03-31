//EX 5
//
console.log("EX5 - sum:");
let numbersArray = [1,13,22,123,49,34,5,24,57,45]
function arry_sum(array) {
    let sum = 0;
    for ( i = 0 ; i < array.length ; i++) {
        sum += array[i];
        //debug - step calculation
        //console.log( "The sum so far is " + sum);
    }
    console.log( "The sum of this array is " + sum);
    return sum;
}
arry_sum(numbersArray);


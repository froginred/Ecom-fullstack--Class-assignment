
//EX 5
//Write a function that receives an array of objects.
// Each object should represent a student with the properties:
// - id
// - first name
// - last name
// - age
// - country
// - city
// In addition, the function should receive a property to change.
// 1 - The function should check for each property in each object in the array if the given
// property exists and if it does, the function should delete it from the object.
// Write another function that print each property of each object in the given array
console.log(" ");
console.log("------------");
console.log("EX6 - object arry  :");
 
const test_array = [
    {
        id : 1,
        First_Name : "Nitsan",
        Last_Name : "Salton",
        age : 33,
        country : "Israel",
        city : "Mishmeret",

    },
    {
        id : 2,
        First_Name : "Amitay",
        Last_Name : "Gabay",
        age : 27,
        country : "Israel",
        city : "Shomron",

    },
    {
        id : 3,
        First_Name : "Mitch",
        Last_Name : "Kaminer",
        age : 54,
        country : "USA",
        city : "Atlanta",

    },

]


//Delete function
console.log (test_array);
 function deleteProperty (studentList, property) {
    for ( i = 0; i < studentList.length ; i++ ){
        if (studentList[i].hasOwnProperty(property)){
            delete studentList[i][property];
        }
        else {
            console.log(`Sorry, could not find the "${property}" property`)
        }

    }
}


//Print property function. 
//the function checks if the property exists, and id so prints the properties of all the IDs in the array
function printProperty (studentList, property) {
    for ( i = 0; i < studentList.length ; i++ ){
        if(!studentList[i].hasOwnProperty(property)){
            console.log(`Sorry, could not find the "${property}" property`)
        } else {
            console.log ( `the ${property} property of for student ID ${studentList[i].id} is: ${studentList[i][property]}`);
            
        }
      
    }

};

//tests

deleteProperty(test_array, "First_Name");
deleteProperty(test_array, "Fime"); // no property
console.log (test_array); //check that it is deleted
printProperty(test_array, "city");
printProperty(test_array, "yolk"); // no property

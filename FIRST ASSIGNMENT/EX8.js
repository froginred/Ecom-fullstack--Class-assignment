// Ex8: 

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    };

console.log(" ");
console.log("------------");
console.log("EX8 -  John the student  :");

// 1 - Write a function that prints all the student data (property at every new line).
function printStudentData (student){
    console.log("------------");
    for (property in student) {
        //checks for array, if so - seprate it to a readable content.
        if (Array.isArray(student[property]) == true ) {
            console.log (property + ": " + student[property].join(", "));
        }else {
            console.log(property + ": " + student[property]);
        }
        
    }
    console.log("------------");
}

// 2 - Write a function that receives an object of the student and hobbie, the function should add the hobbie to the student's hobbies.
function addStudentHobbie (studentObject, hobby){
    if (studentObject) {
        if (studentObject.hobbies.includes(hobby)){
            console.log(`Hobby: ${hobby} already exists at ${studentObject.name}`)
        } else {
            student.hobbies.push(hobby);
            console.log(`Hobby: ${hobby} was added to ${studentObject.name}`)
        }
    } else {
        console.log("Sorry, this student does'nt exist.")
    }
}

// 4 - Write a function that receives an object of a student and hobbie, the function should
// delete the hobbie from the student's hobbies.
function delStudentHobbie (studentObject, hobby){
    if (studentObject) {
        if(studentObject.hobbies.includes(hobby)){
            //get index of hobby for splice. using "delete" leaves a null space
            let hobbyIndex = studentObject.hobbies.indexOf(hobby);
            studentObject.hobbies.splice(hobbyIndex, 1);
            console.log(`Hobby: ${hobby} was deleted from ${studentObject.name}`)
        } else {
            console.log(`Hobby: ${hobby} does not exist`)
        }
    } else {
        console.log("Sorry, this student does'nt exist.")
    }
}

printStudentData(student);

addStudentHobbie(student, "living");
addStudentHobbie(student, "living");//test

// 3 - Use the function that you wrote to print the data of the student and check that the new
// hobbie has been added.
printStudentData(student);

delStudentHobbie(student, "games");
delStudentHobbie(student, "games");//test
// 5 - Use the function that you wrote to print the data student and check that the new hobbie
// has been delete from the object student
printStudentData(student);

// 6 - Add to the object student new property: family_name and add a value.
student.family_name = "Smith";
printStudentData(student);

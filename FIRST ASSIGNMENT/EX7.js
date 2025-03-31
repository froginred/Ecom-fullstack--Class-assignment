//EX 7 


 
const ourPets = [
    {
    animalType: "cat",
    names: [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
    ]
    },
    {
    animalType: "dog",
    names: [
    "Spot",
    "Bowser",
    "Frankie"
    ]
    },
    {
    animalType: "dog",
    names: [
    "1",
    "2",
    "3"
    ]
    }
    
    ];

console.log(" ");
console.log("------------");
console.log("EX7 - Cats and dogs  :");

//  a function that receives an array of objects and print only animalType: cat.
function CatFinder(array) {
    for ( i = 0 ; i < array.length ; i++ ){
        if (array[i].animalType == "cat") {
            console.log(array[i].animalType + ": " + array[i].names.toString());
            }
        }
}

//Write a function that receives an array of objects and print only the names of animalType: dog
function dogNamesOnly (array) {
    let dogNames = "";
    for ( i = 0 ; i < array.length ; i ++){
        if(array[i].animalType == "dog"){ 
            dogNames += array[i].names.join(", ") + ", ";
        }
    }
    console.log ("dog names: " + dogNames);
    
}

CatFinder(ourPets);
dogNamesOnly(ourPets);
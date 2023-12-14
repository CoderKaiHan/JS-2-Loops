let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

//Use a while loop to iterate through the newInventoryCarModels array to get see car's data type. Remember to initialize your i variable to 0 before starting the loop! Print out each car type in a console.log statement.
let i=0
let typeS1Count = 0
while(i<newInventoryCarModels.length){
    console.log(newInventoryCarModels[i]);
    
    if(newInventoryCarModels[i]==='S1'){
        typeS1Count++;
    }

    i++;
}

console.log("Number of S1 Cars is:" ,typeS1Count)

//Make a new variable called typeS1Count and initialize it to 0. Inside your loop from step 2, check and see if the car type is equal to "S1". If it is, increment the typeS1Count variable by one. Outside the loop, log "Number of S1 Cars is:" and then the value of the typeS1Count variable. Hint: You will need to make an if statment inside your loop!

//Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through an array. We can use either type and accomplish the same objective.

//Outside of this second loop, make a variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". After the loop is closed, print out how many lorries you found.

let lorrieCount = 0

for(i=0;i<newInventoryCarTypes.length; i++){
    if(newInventoryCarTypes[i]==='Lorrie'){
        lorrieCount++
    }
}

console.log(`There are ${lorrieCount} Lorries.`)

//Here's a challenge for you, then. Determine the average age of each new train car the company is receiving. All you have is the year each car was built, knowledge of loops, and your wits! 

let totalCarAge = 0;
let x=0;
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

while(x<newInventoryYearBuilt.length){
  totalCarAge=currentYear-newInventoryYearBuilt[x]+totalCarAge;
  x++;
}

let averageCarAge = totalCarAge/newInventoryYearBuilt.length

console.log(`Average car age is : ${averageCarAge}.`)

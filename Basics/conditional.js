// const userage = 18;
// const user = 12;

// console.log(`user is ${userage} years old`)
// userage>=16
// debugger

// if(userage >= 19 && userage <= 30) console.log("user is a working professional")
    // else console.log("user is nabalig")

// let foodeat = prompt('Have you eat food? answer must be in yes/no')

// console.log(`${foodeat}`)

//  if(foodeat == 'no') 
//     {
//         console.log('then please select the food from menu it is compulsary')
//     }
// else if(foodeat == 'yes') 
//     {
//         console.log('good man!!!!!')
    // }


    let foodeat = prompt('Have you eaten food? Answer must be in yes/no');

console.log(`${foodeat}`);

if (foodeat.toLowerCase() === 'no') {
    console.log('Please select food from the menu. It is compulsory.');
    
    // Menu
    let menu = `
    Menu:
    1. Pizza
    2. Burger
    3. Sandwich
    4. Pasta
    `;
    console.log(menu);

    let choice = prompt('Enter the number of your choice from the menu (1-4):');
    
    switch (choice) {
        case '1':
            console.log('You selected Pizza. Enjoy your meal!');
            break;
        case '2':
            console.log('You selected Burger. Enjoy your meal!');
            break;
        case '3':
            console.log('You selected Sandwich. Enjoy your meal!');
            break;
        case '4':
            console.log('You selected Pasta. Enjoy your meal!');
            break;
        default:
            console.log('Invalid choice! Please choose a number between 1 and 4.');
    }
} else if (foodeat.toLowerCase() === 'yes') {
    console.log('Good man!!!!!');
} else {
    console.log('Invalid input! Please answer with yes or no.');
}


    
    

    





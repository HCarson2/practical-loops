//Part 1
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if ( i % 3  === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/
//Part 2
//Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for  (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//Arbitrary number (n)
let n = 4;
//Search for next prime numbers
let nextPrime = n + 1;
while (true) {
    if (isPrime(nextPrime)) {
        console.log(nextPrime);
        //Break or exitafter finding the first prime number
        break;
    }
    //Increment the next prime number
    nextPrime++;
}

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell = ""; // Variable to store the current cell data
let row = []; // Array to store the current row
const rows = []; // Array to store all rows of data

for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

    if (char === ',') {
        // End of a cell, push it to the row
        row.push(cell);
        cell = ""; // Reset the cell variable
    } else if (char === '\n' || i === csvString.length - 1) {
        // End of a row, push the last cell and the row
        if (i === csvString.length - 1) {
            cell += char; // Add the last character if it's the end of the string
        }
        row.push(cell); // Push the last cell
        rows.push(row); // Push the row to rows
        cell = ""; // Reset the cell variable
        row = []; // Reset the row variable
    } else {
        // Append character to the cell
        cell += char;
    }
}

// Log each row of data
for (const row of rows) {
    console.log(...row);
}

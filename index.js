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
/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

base- reaches 0 
base- if below 0 starting off with return null

case- as long as the number is above 0 

step- add num to reach arg 
***********************************************************************/


function sumToN(n) {
  if (n === 0) return 0;
  if (n < 0) return null; 
   
   
    //console.log(sum);
   return n + sumToN(n -1);             //after sum added to n, run sumToN again but n - 1
}

console.log(sumToN(5));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

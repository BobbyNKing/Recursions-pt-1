/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

base- reach end of array.length
while? index is not array.length 
step? array index increases by 1
***********************************************************************/

function sumArray(arr) {
  if (arr.length === 0) return null;
//console.log(arr);
return arr[arr.length -1] + sumArray(arr.slice(0, (arr.length -1)));

  
}

//console.log(sumArray([1, 2, 3])); //  6
//console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}

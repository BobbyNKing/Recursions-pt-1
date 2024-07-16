/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false

base: go through entire array to locate a specific string resulting in true or false
while? we have not gone through whole array OR true hit
step? move through array, looking for true hit until array is empty
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  if (flavors.length === 0) return false; //if we've gone through the whole array without a true, return false
  if (flavors[flavors.length - 1] === favorite) return true; //if we get a match, return true
  
  return iceCreamShop(flavors.slice(0, (flavors.length -1)), favorite); //if array is not empty and we did not get a true hit, rerun code with final index removed
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
//iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
//iceCreamShop(['moose tracks'], 'moose tracks'); // true
//iceCreamShop([], 'honey lavender'); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}

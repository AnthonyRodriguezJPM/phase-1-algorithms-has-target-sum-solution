


function hasTargetSum(array, target) {
  const seenNumbers = {};
  // [2, 4, 1, 3], 5
  for (let i = 0; i < array.length; i++){
    const x = target-array[i];
      // target = array[i]+x
      // x = target-array[i]



    if (seenNumbers[x]===true) return true;
    seenNumbers[array[i]] = true;
  }
  return false

}


// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   // ([21, 19, 4, 6, 30], 25)
//   for(let i = 0; i<array.length; i++) {

//     // target = item+x2
//     for(let j= i + 1; j<array.length; j++){
//       let add = array[i]+array[j]

//         if(add===target) return true
//     }
//   }
// return false;
// };

/* 
  Write the Big O time complexity of your function here
n^2

*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
Make a function that when any two numbers are added within the array add up to the target number, the function returns true. Otherwise it returns false. If given array '[1,2,3,4] and target number '6' are given, it returns true since 2 and 4 add up to 6. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

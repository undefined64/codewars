// You are going to be given an array of integers.
// Your job is to take that array and find an index
// N where the sum of the integers to the left of N
// is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

//full description: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

// brute force solution
// function findEvenIndex(arr) {
//   let leftSum = 0;
//   let rightSum = 0;
//   let evenIndex = -1;

//   for (let i = 0; i < arr.length; i += 1) {
//     leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
//     rightSum = arr.slice(i + 1, arr.length).reduce((acc, val) => acc + val, 0);

//     if (leftSum === rightSum) {
//       evenIndex = i;
//       return evenIndex;
//     }
//   }
//   return evenIndex;
// }

//optimized solution without unneccessary calculations
function findEvenIndex(arr) {
  let rightSum = arr.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

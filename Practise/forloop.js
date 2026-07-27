// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);

// Write a JavaScript program using a for loop to count the number of vowels in this string:
// let str = "javascript";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if ("aeiou".includes(str[i])) {
//     count++;
//   }
// }

// console.log(count);

// let arr = [2, 5, 8, 11, 14, 17];

// let count = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// Write a JavaScript program using a for loop to find the largest number:
// let arr = [10, 25, 8, 45, 15];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// Write a JavaScript program using a for loop to remove duplicate values from this array:
// let arr = [1, 2, 3, 2, 4, 1, 5];

// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!unique.includes(arr[i])) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);

// Write a JavaScript program using a for loop to reverse this array:
// let arr = [1, 2, 3, 4, 5];

// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);

// Write a JavaScript program using a for loop to find the sum of all numbers:
// let arr = [10, 20, 30, 40];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// Write a JavaScript program using a for loop to check if a number exists in an array.
// let arr = [10, 20, 30, 40, 50];
// let target = 30;
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     found = true;
//     break;
//   }
// }
// console.log(found);

//Write a JavaScript program using a for loop to count how many times 2 appears:
// let arr = [1, 2, 3, 2, 4, 2, 5];
// let target = 2;
// count = 0;

// for(let i=0; i<arr.length;i++){
//     if(target === arr[i]){
//         count++
//     }
// }
// console.log(count);

// Write a JavaScript program using a for loop to print only the odd numbers:
// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     console.log(arr[i]);
//   }
// }

for (let i = 1; i <= 3; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
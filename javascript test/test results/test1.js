// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function result(input) {
//   // Your Code Here
// }

// console.log(result(input));


let sum = input.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log("total is ",sum);
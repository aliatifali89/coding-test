// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

// function result(num) {
  // Your Code Here
// }
const gettingOne = binarynumber =>{
    return binarynumber == 1
}
const convertNumberToBinary = number => {
  var newArray = Array.from((number >>> 0).toString(2)).filter(gettingOne);
  var count = 0;
for(var i = 0; i < newArray.length; ++i){
        count++;
}
console.log("count",count)
  return count;
}
// console.log(result(number));

console.log(convertNumberToBinary(number))

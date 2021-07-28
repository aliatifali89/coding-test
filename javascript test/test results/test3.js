// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];



var Result = []

function checkMaxArray(array1,array2) {
  var maxArr1=Math.max.apply(null, array1)
  console.log(maxArr1)
  console.log(array1)
  if(array2 > maxArr1 ){
    Result.push("true")
  }else{
    Result.push("false")
   
    
  }
}

function checkMinArray(array1,array2) {
 
  var minArr1=Math.min.apply(null, array1)
  console.log(minArr1)
  if(Math.min.apply(null, array2) < minArr1){
    Result.push("true")
  }else{
    Result.push("false")
  }
}


checkMaxArray(arr1,arr2)
checkMinArray(arr1,arr2)
console.log("Result",Result)

// function result(arr1, arr2) {
//   // Your Code Here
//   const res = [];
// }



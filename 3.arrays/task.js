function compareArrays(arr1, arr2) {
  let result;

if (arr1.length === arr2.length){

  result = arr1.every(function check(value, index){
    value === arr2[index];
  })
}
  // Ваш код

  return result; // boolean
}

compareArrays([1, 8, 9], [1, 8, 9]);

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map(function multiply(item){
    return item * 10;
  });

  return resultArr; // array
}
advancedFilter([-1,6,-9,3]);
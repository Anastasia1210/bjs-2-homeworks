function compareArrays(arr1, arr2) {
  
  let result = arr1.every((value, index) => value === arr2[index] && arr1.length === arr2.length);
  
    return result; // boolean
  }
  
  compareArrays([8, 9], [8,9]);

compareArrays([1, 8, 9], [1, 8, 9]);

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);

  return resultArr; // array
}
advancedFilter([-1,6,-9,3]);
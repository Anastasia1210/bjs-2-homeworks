// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
    min = 101;
    max = - 101;
    sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }

  }

    avg = sum / arr.length;
    avg = Number(avg.toFixed(2));
  return { min:min, max:max, avg:avg };
}

getArrayParams([1, 2, 3, -100, 10]);

// Задание 2

let arrOfArr = [[1, 2, 3], [4, 5, 6]];

function worker(arr) {

  let sum = 0;

    for (let i=0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum;
}

function makeWork(arrOfArr, worker) {

  let max = Number.MIN_SAFE_INTEGER;

  for (let i=0; i < arrOfArr.length; i++) {

    let sum = worker(arrOfArr[i]);
    if (sum > max){
      max = sum;
    }
    
  }
  return max;
}

makeWork(arrOfArr, worker);


"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - (4 * a * c);
  let x1 = (-b + Math.sqrt(d)) / 2 * a;
  let x2 = (-b - Math.sqrt(d)) / 2 * a;
  let x3 = - (b / 2 * a);


  if (d > 0) {
    arr.push(Math.floor(x1 * 100) / 100);
    arr.push(Math.floor(x2 * 100) / 100);
  }
  if (d < 0) {
    arr;
  }
  if (d = 0) {
    arr.push(Math.floor(x3 * 100) / 100);

  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let s = amount - contribution;
  let a = new Date();
  let todayMonth = a.getMonth();
  let dateMonth = date.getMonth();
  let todayYear = a.getYear();
  let dateYear = date.getYear();
  let terms = (dateYear - todayYear) * 12 + (dateMonth - todayMonth);
  let p = percent / 100;
  let payment = s * (p + p / (((1 + p)**terms) - 1));
  let total = payment * terms;
  totalAmount = total.toFixed(2);
  totalAmount = Number(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
  console.log(totalAmount);
}

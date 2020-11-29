/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
var btln;
var number = 1000;
while (number >0){
  if (number%3===0 && number%5===0){
    btln = number;
    break;
  } 
  else {--number}
}
console.log(btln);
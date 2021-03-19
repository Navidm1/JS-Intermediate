// ...For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...


var i;
var fibonacci = []; 

fibonacci[0] = 0;
fibonacci[1] = 1;
for (i = 2; i <= 25; i++) {

  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  console.log(fibonacci[i]);
}



// var fibonacci = [0,1];
// var j = 10;

// for(var i = 0; i < j-2; i++){
//     fibonacci.push(fibonacci[i]+fibonacci[i+1]);
// }

// console.log(fibonacci);
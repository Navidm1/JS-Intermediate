//....Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]




let arr = [];
for(let i = 1; arr.length <= 135; i++){
if(i % 3 === 0 && i % 5 === 0){
    arr.push('FizzBuzz');
} else if(i % 3 === 0){
arr.push('Fizz');
} else if(i % 5 === 0){
    arr.push('Buzz');
}
else {
    arr.push(i);
  }

}

    console.log(arr);



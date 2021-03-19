//...Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.




let divisibleArray = [];

for(let i = 200; i <= 2700; i++){
  if((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)){
    divisibleArray.push(i);
  }
}

console.log(divisibleArray);

// for(let i = 200; i <= 2700; i++){
//   if(i % 3 === 0 || i % 5 === 0){
//     divisibleArray.push(i);
//   }
// }


// for(let i = 0; i < divisibleArray.length; i++){
//   if( divisibleArray[i] % 15 === 0){
//     divisibleArray.splice(i, 1);
//   }
// }

// console.log(divisibleArray);
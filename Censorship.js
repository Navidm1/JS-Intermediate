//....Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice


var x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
for (var i = 0; i < x.length; i++){
    if(x[i] === 'Program'){
  x[i] = '*'.repeat(x[i].length);
  }
}
console.log(x);
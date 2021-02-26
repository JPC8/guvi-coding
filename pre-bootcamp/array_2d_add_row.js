const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
// logic part
    var sum=0;
    for(i = 0; i < userInput.length; i++){  
        var sumRow =0;
        var A= userInput[i].split(" ");
            for(j = 0; j < A.length; j++){  
                sumRow += parseInt(A[j]);
                sum += parseInt(A[j]);
            }  
        console.log('Sum of', i+1,'row is', sumRow);
    }
console.log('total:', sum);
  
//end of logic
});

/*

INPUT:
  1 2 3
  1 2
  1
  
OUTPUT:
  Sum of 1 row is 6
  Sum of 2 row is 3
  Sum of 3 row is 1
  total: 10

*/

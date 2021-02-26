const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
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
});

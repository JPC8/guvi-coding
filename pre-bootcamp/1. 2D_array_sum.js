const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    var Sum= 0;
    for(i= 0; i< userInput.length; i++){
        A= userInput[i].split(" ");
        for(j=0;j<A.length;j++){
            Sum += parseInt(A[i]);
        }
    }

    console.log(Sum);
});

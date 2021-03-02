// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var Mat= userInput[0].split(" ");
    var M= parseInt(Mat[0]);
    var N= parseInt(Mat[1]);
    //console.log(M+'x'+N, 'Matrix');
    var Ram=0, Sita=0;
    
    for(i=1;i<=M;i++){
        R= userInput[i].split(" ");
        for(j=0;j<N;j++){
            C=R[j];
            if(C==1){
                Sita+=1;
            }
            else{
                Ram+=1;
            }
        }
    }
    console.log('RAM:', Ram);
    console.log('SITA:', Sita);
});

/*
INPUT:
  1 3
  1 1 1
OUTPUT:
  RAM: 0
  SITA: 3
---
INPUT:
  3 1
  1 1 1
OUTPUT:
  undefined
*/

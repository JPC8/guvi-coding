## Assignment 5
#### Write a function in javascript to find the average of n (n<10) using arrays.
```
var numArr = [25,65,48,30,10];

function avgArr(numArr){
    numlen=numArr.length;
    var sum=0;
    if(numlen<=10){
        for(i=0;i<numlen;i++){
            sum+=numArr[i];
        }
    }
    return (sum/numlen);
}

console.log(avgArr(numArr));
```
#### Write a function in javascript to get the name from the user and find how many vowels are there
```
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
  function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiouAEIOU]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = userInput[0];

const result = countVowel(string);

console.log(result);
});
```

## Assignment 5
#### 1. Write a function in javascript to find the average of n (n<10) using arrays.
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
#### 2. Write a function in javascript to get the name from the user and find how many vowels are there
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
#### 3. define a class "guvi_student" with variable mark1 and mark2 in it and method to print marks. create two object (student1,student2) from the class "guvi_students" and print their marks using method defined in class
```
Stdobj= { std1:[84,88], std2:[74,95] };
class guvi_student{
    
    constructor(mark1, mark2) {
        this.mark1 = mark1;
        this.mark2 = mark2;
     }
    
    printMarks(){
        console.log('Mark 1: '+ this.mark1,'| Mark 2: '+ this.mark2);
    }
}

student1 = new guvi_student(Stdobj.std1[0], Stdobj.std1[1]);
student1.printMarks();

student2 = new guvi_student(Stdobj.std2[0], Stdobj.std2[1]);
student2.printMarks();
```

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

Calculator using Callback
```js
function cal(a,b,cb){
    console.log(cb(a,b));
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function mod(a,b){
    return a%b;
}

cal(4,5,sum); // 9
cal(5,4,sub); // 1
cal(5,5,mul); // 25
cal(2,3,div); // 0.66
cal(2,3,mod); // 2
```

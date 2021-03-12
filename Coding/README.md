# Patterns in JS

##### Table of Contents

[1. Rectangle / Square](#1-rectangle--square)

[2. Hollow](#2-hollow)

[3. Right Triangle Star](#3-right-triangle-star)

[4. Right Triangle Star / Downward Triangle Star / Upside down / Flipped](#4-right-triangle-star--downward-triangle-star--upside-down--flipped)

[5. Left Triangle Star](#5-left-triangle-star)

[6. Left Triangle Star / Upside down / Flipped](#6-left-triangle-star--upside-down--flipped)

---


### 1. Rectangle / Square
```
* * * * *     |    * * * 
* * * * *     |    * * * 
* * * * *     |    * * * 
```
```js
  //let UserArr = userInput[0].split(' ');
  let M= 3 //parseInt(UserArr[0]);
  let N= 5 //parseInt(UserArr[1]);
  let res1='';
  
      for(j=0;j<N;j++){
      
          res1+='* '  
      }
      res=res1.slice(0,-1)
      
        for(i=0;i<M;i++){
        
          console.log(res);
        }
```
```js
  let N= 3 

  let res1='';
  
    for(j=0;j<N;j++){
      
        res1+='* '  
    }
    
    res=res1.slice(0,-1)
      
    for(i=0;i<N;i++){
        
        console.log(res);
    }
```
### 2. Hollow
```
* * * * *
*       *
* * * * *
```

```js
  let M= 3
  let N= 5
  let res1='';
        

        for (i = 1; i <=M; i++) 
        { 
            for (j = 1; j <=N ; j++) 
            { 
                if (i === 1 || i === M || j === 1 || j === N){            
                    res1+='* ';

                }else{
                    res1+='  ';

                    }
                    
            } 
            res1=res1.slice(0,-1);
            res1+='\n';
        }
        
       console.log(res1.slice(0,-1));
```
### 3. Right Triangle Star
```
*
**
***
****
*****
```

```js
  let n = 5; // parseInt(userInput[0]);
  let string = "";
    for (let i = 1; i <= n; i++) {

      for (let j = 0; j < i; j++) {
  
        string += "*";
      }
    string += "\n";
  
    }
console.log(string);
```
### 4. Right Triangle Star / Downward Triangle Star / Upside down / Flipped
```
*****
****
***
**
*
```

```js
let n = 5; // parseInt(userInput[0]);
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```
### 5. Left Triangle Star
```
    *
   **
  ***
 ****
*****
```

```js
  let n = 5; // parseInt(userInput[0]);
  let string = "";
    for (let i = 1; i <= n; i++) {
    // printing spaces
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
  // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
  string += "\n";
  }
  console.log(string);
```

### 6. Left Triangle Star / Upside down / Flipped
```
*****
 ****
  ***
   **
    *
```

```js
  let n= 5 //parseInt(userInput[0]);
  let string = "";
  
    
  for (i = n; i > 0; i--) {
  // printing spaces
    for (j = 0; j < n - i; j++) {
      string += " ";
    }
  
  // printing star
  for (k = i; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```

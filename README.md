# guvi 
 - coding which is in JavaScript
 - I'm Zen member

## Pre BootCamp
1. 2D array sum 
    ```js
    var Sum= 0;
    for(i= 0; i< userInput.length; i++){
       A= userInput[i].split(" ");
         for(j=0;j<A.length;j++){
           Sum += parseInt(A[j]);
         }
    }
    console.log('Total:', Sum);
    ```
   > [Read More](pre-bootcamp/array_2d.js)
  
2. Sum of each row from a 2D array and print in a single row. 
    ```js
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
    ```
    > [Read More](pre-bootcamp/array_2d_add_row.js)
3. In String, remove vowels
    ```js
    var strings = userInput[0].split(" ");                         

    string = ((strings.map(x=>x.replace( /[aeiouAEIOU]/g, '' ))).toString()).replace(/,/g," ");              

    console.log(string); 
    ```
    > [Read more](pre-bootcamp/remove_vol.js)
5. Sort the array elements in descending order based on the number of 1’s in its binary representation.
6. Frequency sort using objects.

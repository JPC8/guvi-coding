## 1.You are an employee of ‘Rox Travel’ channel.The channel has decided to give allowances to some customer who satisfy these conditions. The conditions are:

  🔹The customer should be born on or before july 22 1987
  
  🔹The month of D.O.B month should be of 31 days.
  
  🔹You are given with the D.O.B of all the employees.Your task is to print the employee index who are having chance to avail special offer.

### Input Description:
First line contains the number of employee.Next line contains an array of D.O.B of employees

### Output Description:
Print the employee index (index at 1). Print-1 if there are no such employee
```js
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
    
  var num= parseInt(userInput[0]);
  var empArr= userInput[1].split(" ");
  var flag =0, flag1= 0;
    var day= 0;
    var month= 1;
    var year= 2;
    var res= [];
    
    
    function FindMonth(monQ){
    if(monQ==='JULY' || monQ==='JUNE'||monQ==='MAY'||monQ==='APRIL'||monQ==='MARCH'||monQ==='FEBRUARY'||monQ==='JANUARY'){
        flag= true;
    }
    else{
        flag= false;
    }
    
    return flag;
    }
    
    while(day<num*3){
        var pos= (year/3).toFixed(0);
        if(empArr[day]<=31 && empArr[year]<=1987){
            if(empArr[year]==1987 && FindMonth(empArr[month]) || empArr[year]<1987){
                     //console.log('Emp',pos,':',empArr[day],"/",empArr[month],"/",empArr[year]);
                    res+= pos+' ';
                }
            }
            
        
        day+=3;
        month+=3;
        year+=3;
    }
    
    Slice= res.slice(0,-1)
    console.log(Slice)
});
```

#### Sample Input :
4

23 MARCH 1996 23 MARCH 1986 22 JULY 1987 23 APRIL 1987

#### Sample Output :
2 3

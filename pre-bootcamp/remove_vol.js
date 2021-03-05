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
  var strings = userInput[0].split(" ");                         

   string = ((strings.map(x=>x.replace( /[aeiouAEIOU]/g, '' ))).toString()).replace(/,/g," ");              

  console.log(string); 
});

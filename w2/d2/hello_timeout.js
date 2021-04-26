const fs = require('fs');


const retrunValue = fs.readFileSync('./index.html', {encoding:"utf-8"});
console.log(retrunValue);

// let timesRun = 0;


// const interval = setInterval(function() {
//   timesRun++;
//   console.log("hello" + timesRun);
//   if (timesRun === 10) {
//     clearInterval(this)
//   }
// }, 200);



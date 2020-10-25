// function makeArray() {
//   const array = [];
//   const t = 10;

//   for (let i = 0; i < t; i++) {
//   array.push("I am a strange loop.");
// }  
//   return [array, t];
// }
// makeArray();

function forLoop(array){
  for (let i = 0; i < 25; i++) {
    
    if (i == 1) {
    console.log("I am 1 strange loop.");
  } else {
    console.log(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
   }
   return(array);
  }
}
forLoop();

function whileLoop(n) {
  while (n > 0) {
    console.log()
  }
}
whileLoop();

// function doWhileLoop(n) {
  
// }
// doWhileLoop();
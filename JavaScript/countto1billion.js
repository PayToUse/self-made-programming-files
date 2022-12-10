const start = Date.now(); // start time

// loop from 1 to 1 billion
for (let i = 1; i <= 1000000000; i++) {
  // do nothing, just count
}

const end = Date.now(); // end time
const elapsedTime = end - start; // elapsed time in milliseconds
const seconds = elapsedTime / 1000; // convert to seconds

console.log(`Elapsed time: ${seconds} seconds`); 

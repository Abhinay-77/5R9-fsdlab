function* combinedSequence(arr) {
    let a = 0, b = 1;  // Fibonacci sequence starting values
    let i = 0;
 
    // Continue yielding from both sequences
    while (true) {
      if (i < arr.length) {
        yield arr[i];  // Yield value from the array
        i++;
      }
     
      yield a;  // Yield value from the Fibonacci sequence
      [a, b] = [b, a + b];  // Update to the next Fibonacci numbers
    }
  }
 
  // Example usage:
  const arr = [10, 20, 30, 40, 50];  // Example array
  const seqGen = combinedSequence(arr);
 
  // Get the first 10 combined values
  for (let i = 0; i < 10; i++) {
    console.log(seqGen.next().value);
  }
 

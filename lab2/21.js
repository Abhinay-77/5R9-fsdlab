function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;  // Yield the current Fibonacci number
      [a, b] = [b, a + b];  // Update to the next Fibonacci numbers
    }
  }
 
  // Example usage:
  const fibGen = fibonacci();
 
  // Get the first 10 Fibonacci numbers
  for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
  }

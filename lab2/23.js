function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;   // Add the current number to the cumulative sum
      yield sum;    // Yield the current cumulative sum
    }
    return sum;     // Return the final sum after the iteration is complete
  }
 
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  const gen = cumulativeSum(arr);
 
  // Accessing yielded values
  for (let value of gen) {
    console.log('Cumulative sum:', value);
  }
 
  // To access the final return value:
  const { value: finalSum } = gen.next();
  console.log('Final sum:', finalSum);

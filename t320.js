class ResettableIterator {
    constructor(iterable) {
      this.iterable = iterable;
      this.index = 0;  // Track the current index
    }
 
    // The iterable's iterator
    [Symbol.iterator]() {
      return this;
    }
 
    // The next method for the iterator
    next() {
      // If the index is beyond the iterable length, stop iteration
      if (this.index >= this.iterable.length) {
        return { done: true };
      }
     
      // Return the next item and increment the index
      const value = this.iterable[this.index];
      this.index++;
      return { value, done: false };
    }
 
    // Reset the iterator to the beginning
    reset() {
      this.index = 0;
    }
  }
 
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const resettableIterator = new ResettableIterator(numbers);
 
  // First iteration
  for (const num of resettableIterator) {
    console.log(num);
  }
 
  // Reset the iterator and iterate again
  resettableIterator.reset();
 
  for (const num of resettableIterator) {
    console.log(num);
  }
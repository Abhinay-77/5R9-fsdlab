const infiniteSequence = (maxSteps) => {
    let current = 1;
    let steps = 0;
 
    return {
      [Symbol.iterator]() {
        return {
          next() {
            if (steps < maxSteps) {
              steps++;
              return { value: current++, done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  };
 
  const sequence = infiniteSequence(16);
 
  for (const value of sequence) {
    console.log(value);
  }
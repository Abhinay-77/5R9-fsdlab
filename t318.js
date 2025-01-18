const reverseArray = (arr) => {
    return {
      [Symbol.iterator]() {
        let index = arr.length - 1;
        return {
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  };
 
  const arr = [1, 2, 3, 4];
  const reverseIter = reverseArray(arr);
 
  for (const value of reverseIter) {
    console.log(value);
  }
 
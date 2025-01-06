function NumberWrapper(value) {
    this.value = value;
  }
  
  NumberWrapper.prototype.increment = function() {
    this.value++;
  };
  
  let num = new NumberWrapper(10);
  
  console.log(num.value);  
  num.increment();
  console.log(num.value);  
  
  console.log(num.__proto__ === NumberWrapper.prototype);  
NumberWrapper.prototype.__proto__ === Object.prototype
  console.log(Object.prototype.__proto__); 
  


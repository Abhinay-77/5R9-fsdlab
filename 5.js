function convertTemperature() {

    let temp = parseFloat(prompt("Enter the temperature value:"));
    let scale = prompt("Is this temperature in Celsius or Fahrenheit? (C/F):").toUpperCase();

  
  
  
    let result;
    if (scale === 'C') {
     
        result = (temp * 9/5) + 32;
        alert(`${temp}°C is equal to ${result}°F.`);
    } else if (scale === 'F') {
    
        result = (temp - 32) * 5/9;
        alert(`${temp}°F is equal to ${result}°C.`);
    }
}

convertTemperature();
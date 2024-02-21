
// let outputScreen = document.getElementById("output-screen");

// function clearScreen() {
//   outputScreen.value = "";
// }

// function deleteChar() {
//   outputScreen.value = outputScreen.value.slice(0, -1);
// }

// function appendChar(char) {
//   outputScreen.value += char;
// }

// function calculate() {
//   try {
//     outputScreen.value = eval(outputScreen.value);
//   } catch (e) {
//     alert("Invalid expression");
//   }
// }





// function squareRoot() {
//     const output = document.getElementById('output-screen');
//     const currentValue = output.value;
//     const result = Math.sqrt(currentValue);
//     output.value = result;
//   }
  
//   function cubeRoot() {
//     const output = document.getElementById('output-screen');
//     const currentValue = output.value;
//     const result = Math.cbrt(currentValue);
//     output.value = result;
//   }
  


//   function appendChar(char) {
//     const output = document.getElementById('output-screen');
//     if (char === '%') {
//       const currentValue = output.value;
//       const result = parseFloat(currentValue) * 0.01;
//       output.value = result;
//     } else {
//       output.value += char;
//     }
//   }
  
  // rest of the calculate(), clearScreen(), and deleteChar() functions remain the same
  

















  let outputScreen = document.getElementById("output-screen");

  function clearScreen() {
    outputScreen.value = "";
  }
  
  function deleteChar() {
    outputScreen.value = outputScreen.value.slice(0, -1);
  }
  
  function appendChar(char) {
    outputScreen.value += char;
  }
  
  function calculate() {
    try {
      outputScreen.value = eval(outputScreen.value);
    } catch (e) {
      alert("Invalid expression");
    }
  }
  
  function squareRoot() {
    outputScreen.value = Math.sqrt(outputScreen.value);
  }
  
  function cubeRoot() {
    outputScreen.value = Math.cbrt(outputScreen.value);
  }


  
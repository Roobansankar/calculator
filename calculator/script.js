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


  

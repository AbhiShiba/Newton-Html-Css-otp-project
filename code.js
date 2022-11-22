const input0 = document.querySelector("#zero");
const input1 = document.querySelector("#one");
const input2 = document.querySelector("#two");
const input3 = document.querySelector("#three");
const input4 = document.querySelector("#four");
const input5 = document.querySelector("#five");

const inputs = [input0,input1,input2,input3,input4,input5];

const moveFocusToNextInput = (eventOriginationInputNumber) => {
    if (eventOriginationInputNumber === 5) {
      return;
    }
  
    inputs[eventOriginationInputNumber + 1].focus();
  };
  
  const moveFocusToPreviousInput = (eventOriginationInputNumber) => {
    if (eventOriginationInputNumber === 0) {
      return;
    }
  
    inputs[eventOriginationInputNumber - 1].focus();
  };

  const invalidInput = (inputNumberToBeGetBack) => {
    inputs[inputNumberToBeGetBack].value = "";
  }
  
  const onInputChange = (event) => {
    const inputNumber = parseInt(event.target.getAttribute("data-number"));
  
    if (event.key === "Backspace") {
      moveFocusToPreviousInput(inputNumber);
      return;
    }

    if(!((event.key === "1") || (event.key === "2") || (event.key === "3") || (event.key === "4") ||
            (event.key === "5") || (event.key === "6") || (event.key === "7") || (event.key === "8") || (event.key === "9") || (event.key === "0"))){
                invalidInput(inputNumber);
    }
    else{
        moveFocusToNextInput(inputNumber);
    }
  };

inputs.forEach((input) => {
    input.addEventListener('keyup',onInputChange)
})
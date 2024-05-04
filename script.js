class SuperMath {
  constructor() {
    // Valid mathematical operators
    this.validOperators = ["+", "-", "*", "/", "%"];
  }

  // Method to get data form a user
  input() {
    const newX = parseFloat(prompt("Enter any number for X: "));
    const newY = parseFloat(prompt("Enter any number for Y:"));
    let newOperator;

    // Check if operator is valid
    do {
      newOperator = prompt("Choose mathematical operator (+, -, *, /, %):");
    } while (!this.validOperators.includes(newOperator));

    return { X: newX, Y: newY, operator: newOperator }; // Returns new object
  }

  // Method to do math operation
  check(obj) {
    const { X, Y, operator } = obj;

    const confirmation = confirm(
      `Do you want to proceed with the mathematical operation ${operator} with the numbers ${X} and ${Y}?`
    );

    if (confirmation) {
      let result;
      switch (operator) {
        case "+":
          result = X + Y;
          break;
        case "-":
          result = X - Y;
          break;
        case "*":
          result = X * Y;
          break;
        case "/":
          if (Y === 0) {
            console.error("Cannot be divided by 0");
            return;
          }
          result = X / Y;
          break;
        case "%":
          result = X % Y;
          break;
        default:
          console.error("Operator is not valid");
          return;
      }

      console.log(`Result: ${X} ${operator} ${Y} = ${result}`);
    } else {
      // Ask for new data
      const newObj = this.input();
      this.check(newObj);
    }
  }
}

const p = new SuperMath();
const userInput = p.input();
p.check(userInput);

class SuperMath {
  // Method to get data from a user
  input() {
    const newX = parseFloat(prompt("Enter any number for X: "));
    const newY = parseFloat(prompt("Enter any number for Y: "));
    let newOperator;

    do {
      newOperator = prompt("Enter mathematical operator (+, -, *, /, %): ");
    } while (!["+", "-", "*", "/", "%"].includes(newOperator)); // Check if operator is valid

    return { X: newX, Y: newY, operator: newOperator }; // Returns new object
  }

  // Method to do math operation
  check(obj) {
    const { X, Y, operator } = obj;

    const confirmation = confirm(
      `Do you want to do mathematical operation ${operator} on numbers ${X} and ${Y}?`
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
      // Ask new data
      const newObj = this.input();
      this.check(newObj); // Recursive function to do everything once again with new data
    }
  }
}

const obj = { X: 12, Y: 3, operator: "/" };

const p = new SuperMath();
p.check(obj);

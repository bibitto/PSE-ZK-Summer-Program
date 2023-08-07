function modularCalculator(op, num1, num2, mod) {
  if (op === "+") {
    return (num1 + num2) % mod;
  } else if (op === "-") {
    return (((num1 - num2) % mod) + mod) % mod;
  } else if (op === "*") {
    return (num1 * num2) % mod;
  } else {
    return "the given operation is invalid";
  }
}

console.log(modularCalculator("+", 10, 15, 12));
console.log(modularCalculator("-", 10, 15, 12));
console.log(modularCalculator("*", 10, 15, 12));

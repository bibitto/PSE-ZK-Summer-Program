type Operation = "+" | "-" | "*";

export function modularCalculator(
  op: Operation,
  num1: number,
  num2: number,
  mod: number
) {
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

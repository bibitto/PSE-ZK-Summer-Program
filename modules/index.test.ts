import { modularCalculator } from "./module1/modularCalculator";

test("module1_modularCalculator", () => {
  expect(modularCalculator("+", 10, 15, 12)).toBe(1);
  expect(modularCalculator("-", 10, 15, 12)).toBe(7);
  expect(modularCalculator("*", 10, 15, 12)).toBe(6);
});

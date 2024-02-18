import { sum } from "../Common/sum";
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7); //This line is known as assertions
});

import { sum } from "../sum";

test("Function sum should calculate the sum of two integers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});

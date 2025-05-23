import {add} from "../src/addfunction.js"
test('throws error for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});





import {add} from "../src/addfunction.js"
test('returns sum for two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});


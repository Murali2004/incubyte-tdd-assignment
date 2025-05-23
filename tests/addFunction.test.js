import {add} from "../src/addfunction.js"
test('handles multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});



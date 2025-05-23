import {add} from "../src/addfunction.js"
test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});




import {add} from "../src/addfunction.js"
test('supports new lines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});




import {add} from "../src/addfunction.js"
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

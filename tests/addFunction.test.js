import {add} from "../src/addfunction.js"
test('returns number itself for one number', () => {
  expect(add("1")).toBe(1);
});

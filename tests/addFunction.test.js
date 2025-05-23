import { add } from "../src/addFunction.js";

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

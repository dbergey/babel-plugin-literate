const parse = require("./parse");
const { readFileSync } = require("fs");
const { resolve } = require("path");

test("parse simple", () => {
  expect(
    parse(`# Simple
\`\`\`js
console.log("hello")
\`\`\`
logs "hello"!
`)
  ).toBe(`// # Simple
// \`\`\`js
console.log("hello")
// \`\`\`
// logs "hello"!
// `);
});

const README = readFileSync(resolve("README.md"), "utf8");
test("parse README", () => {
  expect(parse(README).split("\n").length).toBe(README.split("\n").length);
});

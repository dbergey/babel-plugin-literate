const FENCE_START = /^```[jt]sx?$/;
const FENCE = /^```$/;

module.exports = markdown =>
  markdown
    .split("\n")
    .reduce(
      ({ isCode, code }, line) => {
        if (line.match(FENCE_START)) {
          return {
            isCode: true,
            code: code + "// " + line + "\n"
          };
        } else if (!line.match(FENCE)) {
          return {
            isCode,
            code: code + (isCode ? "" : "// ") + line + "\n"
          };
        } else {
          return {
            isCode: false,
            code: code + "// " + line + "\n"
          };
        }
      },
      { isCode: false, code: "" }
    )
    .code.slice(0, -1);

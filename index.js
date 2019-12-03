const { declare } = require("@babel/helper-plugin-utils");
const { dirname } = require("path");
const literate = require("./lib/parse");
const { parse } = require("@babel/parser");

module.exports = declare(({ assertVersion }, { files }) => {
  assertVersion(7);
  return {
    parserOverride(code, options) {
      return options.sourceFileName.match(files)
        ? parse(literate(code), options)
        : parse(code, options);
    }
  };
});

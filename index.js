const { declare } = require("@babel/helper-plugin-utils");
const { dirname } = require("path");
const parse = require("./lib/parse");

module.exports = declare((babel, { files }) => {
  babel.assertVersion(7);
  return {
    parserOverride(code, options) {
      const opts = babel.loadOptions();
      return options.sourceFileName.match(files)
        ? babel.parse(parse(code), opts)
        : babel.parse(code, opts);
    }
  };
});

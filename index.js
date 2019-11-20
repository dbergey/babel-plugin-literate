const {declare} = require("@babel/helper-plugin-utils")
const parse = require("./lib/parse")

module.exports = declare((babel, {files}) => {
  babel.assertVersion(7)
  return {
    parserOverride(code, options) {
      return options.sourceFileName.match(files)
        ? babel.parse(parse(code), {})
        : babel.parse(code, {})
    }
  }
})

const parser = require('./parser');

module.exports = babel => ({
	parserOverride: (code, opts) => parser(code, opts),
});

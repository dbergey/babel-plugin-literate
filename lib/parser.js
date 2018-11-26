const babelParser = require('@babel/parser');
const mdi = require('markdown-it')();

module.exports = function(code, babelOpts) {
	if (babelOpts.sourceFileName.match(/\.jsx?\.md$/)) {
		const tokens = mdi
			.parse(code, {})
			.map(token => {
				if (token.type === 'code_block' || token.type === 'fence') {
					return token.content;
				} else if (token.map) {
					return '\n';
				} else return null;
			})
			.filter(line => !!line);

		return babelParser.parse(tokens.join(''), babelOpts);
	} else {
		return babelParser.parse(code, babelOpts);
	}
};

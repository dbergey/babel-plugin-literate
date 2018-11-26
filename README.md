# babel-plugin-literate

Allows [literate programming](https://en.wikipedia.org/wiki/Literate_programming) in Javascript via Babel 7.

Write your code with its documentation surrounding it as a Markdown file. Everything but the code blocks will be ignored.

Currently supports file extensions `.js.md` and `.jsx.md`.

## Sample Babel Config

```js
// babel.config.js
module.exports = {
	plugins: ['babel-plugin-literate'],
};
```

## Related

- [Literate ES Webpack Loader](https://github.com/ndp-software/literate-es-webpack-loader)
- [Literate CoffeeScript](https://coffeescript.org/#literate)

## TODO

- [ ] Make file extensions configurable.
- [ ] Write better tests than just a Markdown file.

# babel-plugin-literate

> [Literate programming](https://en.wikipedia.org/wiki/Literate_programming) in JavaScript

# Usage

```sh
npm install --save-dev babel-plugin-literate
```

and add it to `plugins` in your babel config

```json
{
  "babel": {
    "plugins": [
      [
        "babel-plugin-literate",
        {
          "files": ".*\\.md$"
        }
      ]
    ]
  }
}
```

### using with babel-jest

```json
{
  "jest": {
    "moduleFileExtensions": ["md", "js", "ts", "jsx", "tsx"],
    "transform": {
      ".*(README|\\.(test|spec|usage))\\.([jt]sx?|md)$": "babel-jest"
    },
    "testRegex": ".*(README|\\.(test|spec|usage))\\.([jt]sx?|md)$"
  }
}
```

### using with @babel/node

```sh
babel-node --extensions .md literate.md
```

### using with babel/register

```
require('@babel/register')({
  extensions: ['.md']
});
```

## Literate files

the `files` regex is used to determine what files are literate. The default matches any file with a `.md` extension

**Note:** peer tools might also need to know of the `.md` extension. (See: "[using with babel-jest](#using-with-babel-jest)")

## Supported syntaxes

by default it only supports `js` blocks. With a little engineering magic it could probably support
[the same syntaxes as the @babel/parser](https://babeljs.io/docs/en/babel-parser#language-extensions)
PRs welcome 😉

# Does it work?

this _very_ README is a literate file tested with `babel-jest`.

> npm run test

```js
test("end-to-end integration test", () => {
  expect(true).toBeTruthy();
});
```

# Related

- [Literate ES Webpack Loader](https://github.com/ndp-software/literate-es-webpack-loader)
- [Literate CoffeeScript](https://coffeescript.org/#literate)

# require-context-read

## install

```bash
npm i -s require-context-read
# or
yarn add require-context-read
```

## import

```js
import read from "require-context-read";
```

## use

```js
// get modules with the built-in name
const modules = read(require.context(`./components`, false, /\.vue$/));

// get modules without the file-name
const modules = read(require.context(`./utils`, false, /\.js$/), true);
```

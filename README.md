# object-wrap [![NPM version](https://img.shields.io/npm/v/object-wrap.svg)](https://npmjs.com/package/object-wrap) [![NPM downloads](https://img.shields.io/npm/dm/object-wrap.svg)](https://npmjs.com/package/object-wrap) [![Build Status](https://img.shields.io/circleci/project/egoist/object-wrap/master.svg)](https://circleci.com/gh/egoist/object-wrap) 

> Wrap object items in a function, recursively.

Just like Redux's [bindActionCreator](http://redux.js.org/docs/api/bindActionCreators.html) but suport nested object.

## Install

```
$ npm install --save object-wrap
```

## Usage

```js
const wrap = require('object-wrap')

wrap(obj, function)
```

## License

MIT © [EGOIST](https://github.com/egoist)

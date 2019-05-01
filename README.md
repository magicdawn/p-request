# rp

> lightweight promise api for [request](https://github.com/request/request#requestoptions-callback)

[![Build Status](https://img.shields.io/travis/magicdawn/rp.svg?style=flat-square)](https://travis-ci.org/magicdawn/rp)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/rp.svg?style=flat-square)](https://codecov.io/gh/magicdawn/rp)
[![npm version](https://img.shields.io/npm/v/%40magicdawn/rp.svg?style=flat-square)](https://www.npmjs.com/package/@magicdawn/rp)
[![npm downloads](https://img.shields.io/npm/dm/%40magicdawn/rp.svg?style=flat-square)](https://www.npmjs.com/package/@magicdawn/rp)
[![npm license](https://img.shields.io/npm/l/%40magicdawn/rp.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
npm i @magicdawn/rp --save
```

## API

```js
const rp = require('@magicdawn/rp')
```

### `rp()`

```js
rp(options)
  .then(([res, body]) => {
    /* blabla */
  })
  .catch(err => {
    /* blabla */
  })
```

### `rp.<http-verb>()`

```js
rp.get(url, options)
  .then(([res, body]) => {
    /* blabla */
  })
  .catch(err => {
    /* blabla */
  })
```

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

the MIT License http://magicdawn.mit-license.org

## pdftohtmljs - pdf2htmlEx shell wrapper for Node.js
[![Build Status](https://travis-ci.org/fagbokforlaget/eportaljs.png)](https://travis-ci.org/fagbokforlaget/eportaljs)
e-portaljs provides an interface to OAuth based e-Portal restful api. Currently it only supports two-legged authentication mechanism and book resource.

### Installation
via npm:

```
npm install eportaljs
```

### Usage
```
var eportal = require('eportaljs')
  , params = {api_host: "somewhere", api_key: "key", api_secret: "secret"};

var eportalClient = new eportal(params);

eportalClient.addBook(book, function (err, data) {
  console.log(err, data);
});

```

### Tests
```
$ npm test
$ npm test-cov

```
MIT License

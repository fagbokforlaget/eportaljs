## eportaljs - e-portal books api js wrapper
[![Build Status](https://travis-ci.org/fagbokforlaget/eportaljs.png)](https://travis-ci.org/fagbokforlaget/eportaljs)
e-portaljs provides an interface to OAuth based e-Portal restful api. Currently it only supports two-legged authentication mechanism and book resource.

See example/book.js for detailed example

### Installation
via npm:

```
npm install eportaljs
```

### Usage
```
var eportal = require('eportaljs')
  , params = {api_host: "somewhere", api_key: "key", api_secret: "secret"}
  , book = {"id": "100", "title": "Cool book", "cover": "cover url", "url": "book url"};

var eportalClient = new eportal(params);

eportalClient.addBook(book, function (err, data) {
  console.log(err, data);
});

```

### Tests
```
$ npm test
$ make test-cov

```
MIT License

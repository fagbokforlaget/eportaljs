var assert = require('assert')
  , mock = require('./mock')
  , eportal = require('../lib/client')
  , params = {
      auth_host: "http://localhost:9191",
      eportal_host: "http://localhost:9191/v01/dbok",
      api_key: "myapikey",
      api_secret: "myapisecret"
  }
  , book = {
    "id": "100",
    "title": "New York City",
    "cover": "http://localhost/100/book.png",
    "url": "http://localhost/100/book.epub"
  };
 

var client = new eportal(params);

// start mock server at 9191
mock.createServer(9191);

describe('eportaljs', function() {

  describe('getToken', function() {
    it('it should get auth token', function() {
      client.getToken(function(err, token) {
        assert.equal("bearer", token.token_type);
      });
    });
  });

  describe('addBook', function() {
    it('it should add new book to eportal', function() {
      client.addBook(book, function(err, book) {
        assert.equal(false, err);
        assert.equal("100", book.ResponseObject.ExternalID);
      });
    });
  });

  describe('upsertBook', function() {
    it('it should add new book or update to eportal', function() {
      client.upsertBook("100", book, function(err, book) {
        assert.equal(false, err);
        assert.equal("100", book.ResponseObject.ExternalID);
      });
    });
  });



  describe('getBook', function() {
    it('it should get book from eportal', function() {
      client.getBook("100", function(err, book) {
        assert.equal(false, err);
        assert.equal("100", book.ResponseObject.ExternalID);
      });
    });
  });

 describe('deleteBook', function() {
    it('it should delete book from eportal', function() {
      client.deleteBook("100", function(err, book) {
        assert.equal(false, err);
        assert.equal("success", book.Response);
      });
    });
  });

});

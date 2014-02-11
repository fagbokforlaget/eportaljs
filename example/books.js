var eportal = require('../lib/client.js')
  , book = {
    "id": "5297c4243dfc94ca540022e0",
    "title": "New York City",
    "cover": "http://myiconsite.com/pages/book.png",
    "url": "http://mycontentsite.com/book.epub"
  }
  , params = {
      auth_host: "https://eportalhost.com/",
      api_key: "api key",
      api_secret: "api password"
  };

var eportalClient = new eportal(params);

eportalClient.addBook(book, function (err, data) {
  console.log(err, data);
  eportalClient.deleteBook(data.ExternalID, function (err, data) {
    console.log(err, data);
  });
});

var http = require("http");

exports.createServer = function(port) {
  var server = http.createServer(function (req, res) {
   
    var data = "";
    var book_data = { 
        ResponseID: '1afe449e-9e70-4836-b044-b3e7119d4ef1',
        Status: null,
        ResponseObject: { 
            BookID: 'c959bdce-1b84-4aa6-9a1c-001c3906c422',
            Cover: 'http://localhost/100/book.png',
            Date: null,
            ExternalID: '100',
            Info: null,
            Isbn: null,
            Name: null,
            Title: 'New York City',
            Url: 'http://localhost/100/book.epub' 
        } 
    };

    var delete_data = { 
        ResponseID: 'fa939e76-302e-4cc3-b7ff-c8665b15f31b',
        Status: 'success'
    };

    //console.log("MOCK:", req.url, req.method);

    if (req.url === "/OAuth/Token" && req.method === "POST") {
      data = {"access_token":"gAAAAGHhWG5W3_x7art1Aq4SL2ZwtHwbKMYRX3Xj3-kVWmCrpz0oDQaRoihuv0g7nKu8nFj3hVQY75f-A9-HXhRjQ50J01JAV0kOucwcSEZ2U5wvAIeHdjTdjZRqaoVIXGupdI04LukEs4MTUDlE5IIExCcIu-m_JUV3h4yLWPsZOBqgBAEAAIAAAAAPH3HADXBChsAwEcmvljxcljLV9o5eOjJhVvqXGh5ZTc0P580CxpVhH5EFnTsHlk9iv4CJ_1H53YO36fiUXBpuGAhFa9-X6ejcU3-KzYry3mZRczrvhwKoOXiix9TQlufY2yW3rBPlZ5W14vYVjR_iuwmQ8BY03POFsCfaASUvCEH25dFhcaMHZPdpi6WJckY5AHHk8pO-DB9afZKfIMO3iskFXb0HP4HIuPg7R7Nx7aaKLgXzeuXlrTgGOZoThC1S281ZNrHaTQSonaCOdH5mQ9_Lu4Mxb_9DQAwN8g91W1u9wSo8VCe2FwxzySifLIaVOTG7pxtXIXI1_x3UQsNB","token_type":"bearer","expires_in":"900","scope":"dbok write_full"};
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
    else if (/\/add\/book/gi.test(req.url) && (req.method === "POST" || req.method === "GET")) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(book_data)); 
    }
    else if (/\/get\/book/gi.test(req.url) && req.method === "GET") {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(book_data)); 
    }
    else if (/\/delete\/book/gi.test(req.url) && (req.method === "GET" || req.method === "DELETE")) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(delete_data)); 
    }
    else {
      res.writeHead(501, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({"message": "Not implemented"}));
    }
  });

  if (port) {
    server.listen(port);
  }
  return server;
};

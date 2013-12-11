#!/usr/bin/env node
var request = require('urllib').request;

// Eportal object
function Eportal(params) {
  params = params || {};
  this.host = params.auth_host;
  this.data_host = params.eportal_host || params.auth_host;
  this.api_key = params.api_key;
  this.api_secret = params.api_secret;
  this.grant_type = params.grant_type || "client_credentials";
  this.scope = params.scope || "dbok write_full";
  return this;
};

// Two legged OAuth server side workflow
Eportal.prototype.getToken = function(callback) {
  var _ = this;
  var token_url = this.host + "/OAuth/Token";
  request(token_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/x-www-form-urlencoded'
    },
    dataType: 'json',
    data: {
      client_id: this.api_key,
      client_secret: this.api_secret,
      grant_type: this.grant_type,
      scope: this.scope
    }
  }, function (err, data, res) {
    callback(err, data);
  });
};

// Create new book
Eportal.prototype.addBook = function(params, callback) {
  var _ = this;
  this.getToken(function(err, data) {
    if (err) {
      console.error("Couldn't fetch access token");
      callback(err, null);
      return;
    }
    else {
      var access_token = data.access_token
      request(_.data_host + "/add/book", {
        method: 'POST',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer '+ access_token
          'Content-Type': 'application/json'
        },
        content: JSON.stringify(params),
        }, function(err, book, res) {
          if (err || res.statusCode !== 200) {
            callback(true, null);
            return;
          }
          else {
            callback(false, null);
          }
      });
    }
  });
};

// Create new book
Eportal.prototype.getBook = function(id, callback) {
  var _ = this;
  this.getToken(function(err, data) {
    if (err) {
      console.error("Couldn't fetch access token");
      callback(err, null);
      return;
    }
    else {
      var access_token = data.access_token
      request(_.data_host + "/get/book/"+ id, {
        method: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer '+ access_token
        }
        }, function(err, book, res) {
          if (err || res.statusCode !== 200) {
            callback(true, null);
            return;
          }
          else {
            callback(false, null);
          }
      });
    }
  });
};


// Delete book
Eportal.prototype.deleteBook = function(id, callback) {
  var _ = this;
  this.getToken(function(err, data) {
    if (err) {
      console.error("Couldn't fetch access token");
      callback(err, null);
      return;
    }
    else {
      var access_token = data.access_token
      request(_.data_host + "/delete/book/"+ id, {
        method: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer '+ access_token
        }
        }, function(err, book, res) {
          if (err && res.statusCode !== 200) {
            callback(true, null);
            return;
          }
          else {
            callback(false, null);
          }
      });
    }
  });
};

module.exports = Eportal;

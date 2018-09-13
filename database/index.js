var mysql = require('mysql');

var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'password', database: 'sources'});

var selectAll = function(callback) {
  connection.query('SELECT * FROM sources', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var displayResources = function(callback, logo, name, description, url) {
  connection.query("SELECT * FROM resources;", [
    logo, name, description, url
  ], (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {

      callback(null, results)
    }
  });
};

var displayTeamMembers = function(callback, photo, name, about) {
  connection.query("SELECT * FROM teamMembers", [
    photo, name, about
  ], (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {

      callback(null, results);
    }
  });
};

var insertInfo = function(callback, name, gender, live, currlocation, age) {
connection.query("INSERT INTO chatBoxData (name, gender, live, currlocation, age) VALUES (?, ?, ?, ?, ?)",
[name, gender, live, currlocation, age], (err, results, fields) => {
  if(err) {
    callback(err, null);
  }else{
    console.log(results);
    callback(null, results);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.displayResources = displayResources;
module.exports.displayTeamMembers = displayTeamMembers;
module.exports.insertInfo = insertInfo;

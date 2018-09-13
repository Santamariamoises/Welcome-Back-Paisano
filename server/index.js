var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js')
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

app.get('/sources', function(req, res) {
  database.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/resources', function(req, res) {
  database.displayResources(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/about', function(req, res) {
  database.displayTeamMembers(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/learnMore', function(req, res) {
  console.log(req.body);
  let name = req.body.name;
  let gender = req.body.gender;
  let live = req.body.live;
  let currlocation = req.body.currlocation;
  let age = req.body.age !== undefined
    ? parseInt(req.body.age)
    : 18;
  const {name, gender, live, currlocation, age} = steps;

  if (!steps) {
    res.sendStatus(400);
  } else {
    console.log(data);
    database.insertInfo(name, gender, live, currlocation, age, function(err, data) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    })
  }
})


app.listen(5000, function() {
  console.log('listening on port 5000!');
});

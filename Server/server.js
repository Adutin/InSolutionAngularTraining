var cors = require('cors')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('TODO list RESTful API server started on: ' + port);
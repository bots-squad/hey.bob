#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');

let http_port = config.listener_server_port;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post(`${config.listener_route}/:room`, (req, res) => {
  console.log(req.body, req.params);
  res.status(201).end();
});

app.listen(http_port)

console.log(`Listening on ${http_port}`);

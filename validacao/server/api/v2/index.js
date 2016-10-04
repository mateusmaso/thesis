var fs = require('fs');
var path = require('path');
var express = require('express');
var store = require('../../store');

var router = express.Router();

router.get('/users/:id', (request, response) => {
  response.json(store.user);
});

router.get('/users/:id/posts', (request, response) => {
  response.json(store.posts);
});

router.get('/posts/:id', (request, response) => {
  response.json(store.posts[0]);
});

module.exports = router;

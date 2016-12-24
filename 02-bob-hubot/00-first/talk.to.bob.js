#!/usr/bin/env node
const fetch = require('node-fetch');
const config = require('./config.js');

fetch(`${config.hubot_url}/general`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "bob help me with java"
  })
})

fetch(`${config.hubot_url}/random`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "I'm upset"
  })
})

fetch(`${config.hubot_url}/random`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "Hey Babs, could you make please a pullrequest on file hello.js?"
  })
})

fetch(`${config.hubot_url}/general`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "bob yo"
  })
})

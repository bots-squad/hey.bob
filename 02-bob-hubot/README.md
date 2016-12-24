# 02-bob-hubot

## 00-first

This part is a walking skeleton of Hubot

### Listen and display Hubot answers

- run `./listen.js` (this is an Express application)
- set up variables and parameters in the `config.js` file

> eg: You can use this part as a middleware to send informations (Johnny5, MQTT, ...)

### Start Hubot

- run Hubot: `./bob.js`
- the used adapter is: https://github.com/bots-squad/hubot-json-rest-adapter
- the source code of Hubot is here: `00-first/scripts/bobsbrain.js`
- set up variables and parameters in the `config.js` file

### Talk to Hubot:

```javascript
fetch(`http://<server-name>:<port>/<room_name>`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: "@k33g_org",
    message: "bob yo"
  })
})
```
> see `talk.to.bob.js`

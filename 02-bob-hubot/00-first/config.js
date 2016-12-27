
let hubot_port = 8082;
let hubot_server_name = 'localhost';
let hubot_protocol = 'http';
// url to send message to Hubot
let hubot_url = `${hubot_protocol}://${hubot_server_name}:${hubot_port}/receive`
let listener_server_port = 8083;
let listener_server_name = 'localhost';
let listener_protocol = 'http';
let listener_route = '/hey/iam/bob';
// url used by hubot  - for the response
let listener_answer_url = `${listener_protocol}://${listener_server_name}:${listener_server_port}${listener_route}`

module.exports = {
  hubot_port: hubot_port,
  hubot_url: hubot_url,
  listener_server_port: listener_server_port,
  listener_route: listener_route,
  listener_answer_url: listener_answer_url
}

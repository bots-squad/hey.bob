#!/usr/bin/env node
"use strict";
require('shelljs/global');
const config = require('./config.js');

process.env["EXPRESS_PORT"] = config.hubot_port;
process.env["HUBOT_POST_RESPONSES_URL"] = config.listener_answer_url

exec(`./bin/hubot -a http-adapter`)

/* RocketChat setup
process.env["USER"] = "bob";

process.env["EXPRESS_PORT"] = 8082;
process.env["ROCKETCHAT_URL"] = "http://localhost:8083";
process.env["ROCKETCHAT_ROOM"] = "";
process.env["LISTEN_ON_ALL_PUBLIC"] = true;
process.env["ROCKETCHAT_USER"] = "bob";
process.env["ROCKETCHAT_PASSWORD"] = "bobmorane";
process.env["ROCKETCHAT_AUTH"] = "password";

exec(`./bin/hubot -a rocketchat`)
*/

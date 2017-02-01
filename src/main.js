const SlackBot = require('slackbots'),
  config = require('../config'),
  ArnoldBot = require('./arnold-searchenegger');
  A = new ArnoldBot({
    channel: config.CHANNEL_NAME,
    bot: new SlackBot({
      token: config.BOT_TOKEN,
      name: config.BOT_NAME
    })
  });

A.BOT.on('start', () => {
  A.BOT.on('message', (msg) => {
    A.handleMessage(msg);
  });
});

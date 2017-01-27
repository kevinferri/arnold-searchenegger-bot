const SlackBot = require('slackbots'),
  config = require('../config'),
  PercolateBot = new SlackBot({
    token: config.BOT_TOKEN,
    name: config.BOT_NAME
  });

PercolateBot.on('start', () => {
  PercolateBot.on('message', (msg) => {
    if (msg.type === 'message') {
      PercolateBot.getUsers()._value.members.forEach((user) => {
        if (msg.user === user.id) {
          PercolateBot.postMessageToUser(user.name, `Here are the results for "${msg.text}":`);
          PercolateBot.postMessageToChannel('percolate-bot-test', `${user.real_name} is searching for ${msg.text}`);
        }
      });
    }
  });
});

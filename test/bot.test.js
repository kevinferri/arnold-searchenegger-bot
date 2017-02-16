const assert = require('assert'),
  SlackBot = require('slackbots'),
  Arnold = require('../src/arnold-searchenegger.js');

describe('Arnold', () => {
  describe('#constructor()', () => {
    it('contructs properly when given a channel and bot', () => {
      new Arnold({
        channel: 'some-channel',
        bot: new SlackBot({
          token: 'some-token',
          name: 'some-name'
        })
      });
    });
    it ('initializes a SlackBot with a token and name', () => {
      let token = 'some-token',
        name = 'some-name',
        channel = 'some-channel',
        a = new Arnold({
          channel: channel,
          bot: new SlackBot({
            token: token,
            name: name
          })
        });
      assert.equal(a.BOT.token, token);
      assert.equal(a.BOT.name, name);
    });
  });
});

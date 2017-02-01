class Arnold {
  constructor(opts) {
    this.CHANNEL_NAME = opts.channel;
    this.BOT = opts.bot;
  }

  handleMessage(msg) {
    if (msg.type === 'message') {
      this.BOT.getUsers()._value.members.forEach((user) => {
        if (msg.user === user.id) {
          this.BOT.postMessageToUser(user.name, `Here are the results for "${msg.text}":`);
          if (this.CHANNEL_NAME) {
            this.BOT.postMessageToChannel(this.CHANNEL_NAME, `${user.real_name} searched for ${msg.text}`);
          }
        }
      });
    }
  }
}

module.exports = Arnold;

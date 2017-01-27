# Percolate Slack Bot
A work in progress

## Running The Bot

```
git clone https://github.com/kevinferri/percolate-bot
cd percolate-bot
npm install
npm start
```
Add config.js to the root of the project with the following:
```
const config = {
  'BOT_TOKEN': '', // your bot token
  'BOT_NAME': '' // your bot name
  'CHANNEL_NAME': '', // a channel to log the percolate searches
};

module.exports = config;
```

## Running Tests
`npm test`

# arnold-searchenegger-bot
A work in progress slack bot

## Running The Bot

```
git clone https://github.com/kevinferri/arnold-searchenegger-bot
cd arnold-searchenegger-bot
```
Add config.js to the root of the project with the following:
```
const config = {
  'BOT_TOKEN': '', // your bot token
  'BOT_NAME': '' // your bot name
  'CHANNEL_NAME': '', // a channel to log the searches (leave this blank if you do not want public logs of user's searches)
};

module.exports = config;
```
Then install dependencies and run the app:
```
npm install
npm start
```

## Running Tests
`npm test`

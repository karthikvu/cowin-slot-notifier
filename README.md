A tiny tool to poll CoWin's API to check for avaiable vaccination slot

Supports System Notifications and Slack integrations

Pre-requisites:
- [Node JS](https://nodejs.org/en/download/)

Run the following after clone :

`npm install`

`npm start`

The tool polls the API every 5 seconds. You can change that in [index.js](./index.js)

Configuration

1. Update your pin code in the `constants.js` file
2. If you have a slack workflow, update the Workflow webhook into the constants file

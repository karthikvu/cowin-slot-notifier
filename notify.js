const notifier = require('node-notifier');

const notify = message => notifier.notify({
    title: 'Cowin App',
    message: message
});

module.exports = { notify }
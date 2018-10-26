const express = require('express');
const webpush = require('web-push');

const publicVapidKey = 'BIGlg3U31W3SBHWsxRLwkpt3Bz335sA-oPmxnZUc7gxoOe1FNqx-9HxPzDKZI7zJF4_t-Q2mfYrm0Wd5R8f3BFw';
const privateVapidKey = 'PH6prpx301Q1PpxiZgkFA8SfHixeYhe-n-3eO5iLeDA';

// Replace with your email
webpush.setVapidDetails('mailto:val@karpov.io', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);

const express = require('express');

const app = express();
const port = 3456;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log("API available on localhost port 3456");
});

module.exports = app;

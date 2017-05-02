const express = require('express');
const app = express();


app.use(express.static(`${__dirname}/dist`));

app
  .get('*', (req, res) => {
    res
      .sendFile(`${__dirname}/dist/index.html`);
  })
  .listen(9000);
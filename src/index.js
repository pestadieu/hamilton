const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('Server started!');
});

/*app.route('/').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});*/

app.route('/').post((req, res) => {
  console.log('Inside Post request');
  res.send(201, req.body);
});

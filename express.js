const express = require('express');
const app = express();
const port = 3000;
const blog = require('./blog')

app.use('/blog', blog)

app.use(express.static('public'));

app.get('/main', (req, res) => {
  res.sendFile('templates/main.html', {root: __dirname});
  console.log("get request");
  console.log(req.params)
});

app.post('/', (req, res) => {
  console.log("post request");
  res.send('Hello post request!');
  
});

app.put('/', (req, res) => {
  console.log("put request");
  res.send('Hello put request!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

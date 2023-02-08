const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000,(req, res) => {
    console.log(`Hello port: ${port}`)
});





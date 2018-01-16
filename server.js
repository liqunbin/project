const express = require('express');
var app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/dist')))
app.get(['/*'], function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });

app.listen(5000, function(err) {
if (err) {
    console.log(err);
    return;
}
console.log('Listening at http://localhost:5000');
});
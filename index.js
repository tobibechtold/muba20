var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) => {
    fs.readFile('./public/content.json', 'utf8', (err, jsonString) => {
        var json = jsonString;
        var content = JSON.parse(json);
        res.render('index', {content: content});
    });
});

app.listen(port, () => {
    console.log('express-rss-reader is running on port 3000.');
});

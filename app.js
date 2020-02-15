const express = require('express');
const path = require('path');
const app = express()
const ejs = require('ejs');
const http = require('http');
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=1581129&APPID=f2cac4d91aba28358f166f11193c4cc8&units=metric ';

app.set('view engine', 'ejs');
app.use(express.static('public/css/'));
app.use(express.static('public/images/'));
app.use(express.static('public/js/'));
app.use(express.static('public/fonts/'));
app.use(express.static('public/vendor/'));

let data = '';
http.get(url, (resp) => {
  
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.get("/", function(req, res) {
   res.render('index', { weatherData: JSON.parse(data)});
   // res.sendFile('index.html', {root: path.join(__dirname, '/')});
   
});

app.get("/about", function(req, res) {
  res.render('about');
});
app.listen(3000);

const express = require('express');
const app = express();
const router = require('./routes/guestbookRoutes');
const path = require('path');
const public = path.join(__dirname,'public');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
// redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(public));
app.use('/', router); 
require('dotenv').config()
app.listen(3000, () => {
console.log('Server started on port 3000. Ctrl^c to quit.');
})


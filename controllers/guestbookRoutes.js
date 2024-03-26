const express = require('express');
const router = express.Router(); 

router.get('/about', function(req, res) {
    res.redirect('/about.html');
    }) 

router.get('/guestbook', function(req, res) {
    res.send('<h1>Guestbook Messages</h1>');
    })

router.get("/", function(req, res) {
    res.send('Hello and welcome to the guestbook application.');
    })

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
    })
    
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
    })    

module.exports = router;
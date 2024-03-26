const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/guestbookControllers.js');

router.get('/about', function(req, res) {
    //res.sendFile('about.html');
    //res.send('about route')
    res.redirect('about.html');
    }) 

router.get('/guestbook', controller.entries_list);

router.get("/", controller.landing_page);

router.get('/new', controller.new_entry); 

router.get('/peter', controller.peters_entries);

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
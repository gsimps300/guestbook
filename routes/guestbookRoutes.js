const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/guestbookControllers.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')



router.get('/about', function(req, res) {
    //res.sendFile('about.html');
    //res.send('about route')
    res.redirect('about.html');
    }) 

router.get('/guestbook', controller.entries_list);

router.get("/", controller.landing_page);



router.get('/peter', controller.peters_entries);

router.get('/new', verify, controller.show_new_entries);
router.post('/new', controller.post_new_entry);
router.get('/posts/:author', controller.show_user_entries);

router.get('/register', controller.show_register_page); 

router.post('/register', controller.post_new_user); 
router.get('/login', controller.show_login_page); 
router.post('/login', login, controller.handle_login);
router.get('/new', verify, controller.show_new_entries);
router.get("/logout",verify, controller.logout);

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
exports.entries_list = function(req, res) {
    res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a listof guest book entries.</p>');
}

exports.landing_page = function(req, res) {
    res.render("entries", {
    'title': 'Guest Book',
    'subject': 'Good day out',
    'contents': 'We had a really good time visiting the museum.'
    });
    }

exports.new_entry = function(req, res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}

exports.peters_entries = function(req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPetersEntries();
}

const guestbookDAO = require('../models/guestbookModel');
const db = new guestbookDAO();
db.init();
db.getAllEntries();

const Datastore = require("gray-nedb");
const bcrypt = require('bcrypt'); const
saltRounds = 10;

     

class UserDAO { constructor(dbFilePath) { if
(dbFilePath) { //embedded 
    this.db = new Datastore({filename: dbFilePath, autoload: true });
} else { //in memory
this.db = new Datastore();
}
}
// for the demo the password is the bcrypt of the username 
init() { this.db.insert({ user: 'Peter', password: '$2b$10$I82WRFuGghOMjtu3LLZW9OAMrmYOlMZjEEkh.vx.K2MM05iu5hY2C'
});
this.db.insert({
user: 'Ann', password: '$2b$10$bnEYkqZM.MhEF/LycycymOeVwkQONq8kuAUGx6G5tF9UtUcaYDs3S'
}); 
return this;} 
create(username,password) { const that = this;
bcrypt.hash(password, saltRounds).then(function(hash)
{ var entry = { user: username, password: hash,}; 
that.db.insert(entry, function (err) {
if (err) { console.log("Can't insert user:", username);
}
});
}); 
} 
lookup(user, cb) { this.db.find({'user':user}, 
function (err, entries) { if (err) { return cb(null, null);
} else { if (entries.length == 0) { return cb(null,null);
} 
return cb(null, entries[0]);
}
});
 } 
} 

let username = req.body.username;
    let password = req.body.password; 
    
    userModel.lookup(username, function (err, user) {
        if (err) { console.log("error looking up user", err); 
        return res.status(401).send();
         } 
         if (!user) { console.log("user ", username, " not found");
         return res.status(401).send();
         }
         //compare provided password with stored password
        bcrypt.compare(password, user.password, function (err, result) {
        if (result) 
        {
         //if user exists we will write code to create the JWT here
        //and then pass onto the next middleware
        next();
         } 
         else { 
        return res.status(403).send();
         }
        });
         });

const dao = new
UserDAO(); dao.init();
module.exports = dao; 
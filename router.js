var express = require('express');
var router = express.Router();

const creds = {
    user: "system",
    pass: "123"
}

router.post('/login', (req, res) => {
    // console.log(req.body);
    // res.redirect('/home');
    if (req.body.user == creds.user && req.body.pass == creds.pass) {
        req.session.user = req.body.user;
        res.end("Chut");
    } else {
        res.end("gaand");
    }
});

module.exports = router;
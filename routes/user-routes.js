const expres = require('express');
const ensure = require('connect-ensure-login');

const routerThingy = express.Router();

ensure.ensureLoggedIn();


//routerThingy.get('/profile/edit', (req, res, next) => {

  routerThingy.get(
    '/profile/edit',

    //           redirects to /login if you are NOT logged in
    ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
  res.render('user/edit-profile-view.ejs');
});


module.exports = routerThingy;

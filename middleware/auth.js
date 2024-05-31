// middlewares/auth.js
function ensureAuthenticated(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  
      if (req.session.isAuthenticated) {
        if (req.session.user) {
          res.locals.user = req.session.user;
          next();
        }
        
      } else {
        res.redirect('/login');
      }
    }
    
    module.exports = ensureAuthenticated;
    
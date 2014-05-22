'use strict';

var rooms = require('../controllers/rooms');

// The Package is past automatically as first parameter
module.exports = function(Cah, app, auth, database) {

    app.get('/cah/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/cah/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/cah/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/cah/example/render', function(req, res, next) {
        Cah.render('index', {
            package: 'cah'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });

    app.route('/cah/rooms')
        .get(rooms.all)
        .post(auth.requiresLogin, rooms.create);
    app.route('/cah/rooms/:roomId')
        .get(rooms.show);
        // .put(auth.requiresLogin, hasAuthorization, rooms.update)
        // .delete(auth.requiresLogin, hasAuthorization, rooms.destroy);

    // Finish with setting up the articleId param
    app.param('roomId', rooms.room);
};

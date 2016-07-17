// import "babel-polyfill";

import express from 'express';

import configureServer from './config/';
import configureRoutes from './routes/';

/**
 *
 * @param {Object} cfg
 *   @param {Function} cfg.configureServer
 *   @param {Function} cfg configureRoutes
 *   @param {Jade} cfg.index
 */
export default function configureApp(cfg) {
    const app = express();

    app.set('view engine', 'jade');
    app.get('/', (req, res) => res.render(cfg.index));

    // Configure local server configuration and routes
    configureServer(app);
    configureRoutes(app);

    // Configure custom server configuration and routes
    cfg.configureServer(app);
    cfg.configureRoutes(app);

    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    var port = process.env.PORT || 8080;

    app.listen(port);
    console.log(`Server running at http://127.0.0.1:${port}`); // eslint-disable-line no-console

    return app;
}
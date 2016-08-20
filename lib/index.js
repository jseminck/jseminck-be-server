// import "babel-polyfill";

import express from 'express';

import configureServer from './config/';
import configureRoutes from './routes/';

/**
 * @param {Object} cfg
 *   @param {Function} cfg.configureServer
 *   @param {Function} cfg configureRoutes
 *   @param {String} cfg.staticFolder
 *   @param {String} cfg.index HTML to serve for the index file
 *   @param {Number} cfg.port
 */
export default function configureApp(cfg) {
    const app = express();

    app.get('/', (req, res) => res.send(cfg.index));

    cfg.configureServer(app);
    configureServer(app);

    cfg.configureRoutes(app);
    configureRoutes(app);

    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    var port = cfg.port || process.env.PORT || 8080;

    app.listen(port);
    console.log(`Server running at http://127.0.0.1:${port}`); // eslint-disable-line no-console

    return app;
}
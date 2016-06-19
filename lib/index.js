// import "babel-polyfill";

import express from 'express';

import configureServer from './config/';
import configureRoutes from './routes/';

/**
 *
 * @param configureServer {Function}
 * @param configureRoutes {Function}
 */
export default function configureApp(cfg) {
    const app = express();

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
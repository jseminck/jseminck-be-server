# jseminck-be-server

[![Build Status](https://travis-ci.org/jseminck/jseminck-be-server.svg?branch=master)](https://travis-ci.org/jseminck/jseminck-be-server)  [![Coverage Status](https://coveralls.io/repos/github/jseminck/jseminck-be-server/badge.svg?branch=master)](https://coveralls.io/github/jseminck/jseminck-be-server?branch=master)   [![Dependency Status](https://david-dm.org/jseminck/jseminck-be-server.svg)](https://david-dm.org/jseminck/jseminck-be-server)   [![Code Climate](https://codeclimate.com/github/jseminck/jseminck-be-server/badges/gpa.svg)](https://codeclimate.com/github/jseminck/jseminck-be-server)

Common server code in Express that is shared amongst all `jseminck-be-api` services.

# API

Generally, you will use the API as such:

```js
import configureApp from 'jseminck-be-server';

import configureServer from './config/';
import configureRoutes from './routes/';

module.exports = configureApp({
    configureServer: configureServer,
    configureRoutes: configureRoutes,
    index: '<html><body><p>Hello World</p></body></html>'
});
```

Where configureServer could look like:
```js
export default function configure() {
    configureDb();
}

function configureDb() {
    setupSomeDatabase({
       host: 'localhost',
       port: 5432,
       database: 'myDb',
       username: 'myUser',
       password: 'myPass'
   });
}
```

And configureRoutes could look like:
```js
export default function configureRoutes (app) {
    configureAuthenticationRoutes(app);
}

export function configureAuthenticationRoutes (app) {
    app.route('/myFirstRoute')
        .post(post.bind(app));

    app.route('/mySecondRoute')
        .get(verify.bind(app));
}
```

And index is the HTML which should be served for the `/` GET request, e.g:
```
<html>
  <body>
    <p>
      Hello World
    </p>
  </body>
</html>
```



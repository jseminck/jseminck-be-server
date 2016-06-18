import supertest from 'supertest';
import configureApp from './../../lib/index';

const app = configureApp({
    configureServer: () => {},
    configureRoutes: () => {}
});

describe('/api/ping', () => {
    it("returns ping information on GET", (done) => {
        supertest(app)
            .get('/api/ping')
            .expect(200, {
                ping: 'Hello World'
            }, done);
    });
});
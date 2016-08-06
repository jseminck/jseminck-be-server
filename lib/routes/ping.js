import moment from 'moment';

function get(req, res) {
    return res.status(200).send({
        time: moment().unix()
    });
}

// bodyParser was broken with express 4.14.0. This was added
// as a test to make sure it works.
function post(req, res) {
    return res.status(200).send({body: req.body});
}

export default function configureAuthenticationRoutes(app) {
    app.route('/api/ping')
        .get(get)
        .post(post);
}

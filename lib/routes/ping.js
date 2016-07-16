import moment from 'moment';

async function get(req, res) {
    return res.status(200).send({
        time: moment.unix()
    });
}

export default function configureAuthenticationRoutes(app) {
    app.route('/api/ping')
        .get(get);
}

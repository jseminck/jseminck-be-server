async function get(req, res) {
    return res.status(200).send({
        ping: "Hello World"
    });
}

export default function configureAuthenticationRoutes(app) {
    app.route('/api/ping')
        .get(get);
}

var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser({ mapParams: false }));
server.use(restify.bodyParser({ mapParams: false }));

server.get('/simple', function (req, res) {
    if (typeof req.query.response_size) {
        var response = [];

        for (var i = 0; i < parseInt(req.query.response_size, 10); i++) {
            response.push('X');
        }

        return res.send(response.join(''));
    }

    res.send(200);
});

server.post('/simple', function (req, res) {
    res.send(200);
});

server.post('/echo', function (req, res) {
    res.send(200, req.body);
});

server.listen(process.env.VMC_APP_PORT, function () {
    console.log('listening');
});

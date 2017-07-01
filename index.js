'use strict';

const Hapi = require('hapi');

const defaultPort = 3000;

const server = new Hapi.Server();
server.connection({ port: ~~process.env.PORT || defaultPort });

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello world');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
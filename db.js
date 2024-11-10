const Client  = require('pg').Client;

const client = new Client({
    database: 'postgres',
    schema: 'blogger',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

module.exports = client;
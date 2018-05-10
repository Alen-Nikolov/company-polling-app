const { Client } = require('pg');
const client = new Client('postgres://aiaepdav:cZpRuVwETtHl5irQDaUZtO3ZImkr0e57@packy.db.elephantsql.com:5432/aiaepdav');

client.connect();

module.exports = client;

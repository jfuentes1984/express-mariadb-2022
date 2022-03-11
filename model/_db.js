const mariadb = require('mariadb');

const pool = mariadb.createPool({
    "host": "db host",
    "user": "root",
    "password": "password",
    "database": "db",
    "connectionLimit": 5
});

module.exports = pool;
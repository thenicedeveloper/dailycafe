require('dotenv').config();

module.exports = {
    db: {
        connectionLimit:    process.env.db_connLimit,
        host     :          process.env.db_host,
        port     :          process.env.db_port,
        user     :          process.env.db_user,
        password :          process.env.db_pass,
        database :          process.env.db_name
    }
}
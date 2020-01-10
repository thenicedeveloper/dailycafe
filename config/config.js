require('dotenv').config();

module.exports = {
    db: {
        connectionLimit:    process.env.db_connLimit,
        host     :          process.env.db_host,
        port     :          process.env.db_port,
        user     :          process.env.db_user,
        password :          process.env.db_pass,
        database :          process.env.db_name
    },
    auth: {
        google_id: process.env.google_client_id,
        google_secret: process.env.google_client_secret
    },
    cookieKey: process.env.cookieKey,
    mongoURI: process.env.mongoURI
}
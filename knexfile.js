const connectionString = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING || 'postgres://postgres:docker@localhost/trw',
    // replace USER_NAME, USER_PASSWORD, and DATABASE_NAME with your Docker PostgreSQL container's username, password and an *empty* database
    // that you have created on your Docker PostgreSQL container volume
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },


  production: {
    client: 'pg',
    connection: {
      connectionString,
      ssl : {
        rejectUnauthorized:false
      }
    },
    migrations: {
      tableName: 'knex_migrations_photos'
    }
  }

};

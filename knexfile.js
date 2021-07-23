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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

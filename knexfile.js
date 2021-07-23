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
      'postgres://derlasgqvqqhrd:abec1b09723f6ec047fbea80784de1aa2c7fa349cf4b870a6b007419daa483ff@ec2-18-206-20-102.compute-1.amazonaws.com:5432/d20hod2kh31e03',
      ssl : {
        rejectUnauthorized:false
      }
    }

    migrations: { directory: __dirname + "/migrations"},
    seeds: { directory: __dirname + "/seeds"},
}

};

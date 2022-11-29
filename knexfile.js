require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host:     process.env.DB_HOST
    },
    migrations: {
      directory: __dirname + '/db/migrations/development'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations/development'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host:     process.env.DB_HOST
    },
    migrations: {
      directory: __dirname + '/db/migrations/production'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};

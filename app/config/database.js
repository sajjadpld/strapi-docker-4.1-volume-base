module.exports = ({ env }) => ({
  connection: {
    // client: 'postgres',
    client: process.env.DATABASE_CLIENT,
    connection: {
      // host: env('DATABASE_HOST', 'strapi_db'),
      // port: env.int('DATABASE_PORT', 5432),
      // database: env('DATABASE_NAME', 'strapi_db'),
      // user: env('DATABASE_USERNAME', 'strapi_db'),
      // password: env('DATABASE_PASSWORD', 'strapi_db'),
      // ssl: env.bool('DATABASE_SSL', false),

      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      // ssl: Boolean(process.env.DATABASE_SSL),
      ssl: false,
    },
  },
});

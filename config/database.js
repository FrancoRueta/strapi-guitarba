module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfign04gqg40klnv23hg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_3ywd'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'rLXckUPadxtp6c57LQu4FEX0iWF9Kexr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

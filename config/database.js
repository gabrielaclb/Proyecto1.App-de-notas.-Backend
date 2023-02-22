module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'containers-us-west-22.railway.app'),
        srv: env.bool('DATABASE_SRV', 'mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}'),
        port: env.int('DATABASE_PORT', 7206),
        database: env('DATABASE_NAME', 'notes'),
        username: env('DATABASE_USERNAME', 'mongo'),
        password: env('DATABASE_PASSWORD', 'jj6YkYaAWPNfmtQmoxCn'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});

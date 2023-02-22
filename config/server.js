module.exports = ({ env }) => ({
  host: env('HOST', 'containers-us-west-22.railway.app'),
  port: env.int('PORT', 7206),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '07b43e9899273e4d24c06f9ce6e70b69'),
    },
  },
});

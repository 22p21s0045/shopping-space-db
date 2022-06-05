module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4467759ff0dbaf33798676ce550b2201'),
  },
});

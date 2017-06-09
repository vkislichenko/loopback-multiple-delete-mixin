module.exports = function mixin (app) {
  app.loopback.modelBuilder.mixins.define('MultipleDelete', require('./delete'));
};

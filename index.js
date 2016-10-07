/* jshint node: true */
'use strict';

module.exports = {
  name: 'auth0-ember-simple-auth',

  included: function(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/auth0-lock/build/auth0-lock.js');
      app.import(app.bowerDirectory + '/jsrsasign/jsrsasign-latest-all-min.js');
    }
  }
};

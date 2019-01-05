const cryptPassword = require('../../helpers/crypt-password');
const config = require('config');

exports.seed = function(knex, Promise) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {login: 'admin', name:'Admin', active: true, password: cryptPassword ('super_admin', config.get('salt'))},
            ]);
        });
};

const Bookshelf = require('../../config/bookshelf');

module.exports = Bookshelf.model('User', Bookshelf.Model.extend(
    {
        tableName: 'users',
        hidden: ['password']
    }));
function cryptPassword (password, salt) {
    const crypto = require('crypto');
    let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return hash.digest('hex');
}

module.exports = cryptPassword;
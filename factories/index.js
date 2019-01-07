class Error {
    getText(key) {
        switch (key) {
            case 'user-registered':
                return 'In order to complete your registration, please click the confirmation link in the email that we have sent to you!';
            case 'user-is-not-active':
                return 'In order to complete your registration, please click the confirmation link in the email that we have sent to you!';
            case 'user-exist':
                return 'The email address you have entered is already registered!';
            case 'user-not-exist ':
                return 'The User Name or Password entered is incorrect. Please try again or create a new account!';
            case 'cred-incorrect':
                return 'The User Name or Password entered is incorrect. Please try again or create a new account!';
            default:
                return 'Please create an account or log in!';
        }
    }
}

module.exports = {
    ErrorFactory: new Error()
}
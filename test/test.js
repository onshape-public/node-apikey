var client = require('../index');

describe('API Key Testing Spec', function () {
    describe('Use the API to make some get calls', function () {
        it('should get the user\'s documents', function (done) {
            client(require('./apikey.js')).getDocuments({}, function (data) {
                var response = JSON.parse(data);
                console.log('Fetched ' + response.items.length + ' documents.');
                done();
            });
        });
    });
});


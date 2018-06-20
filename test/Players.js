"use strict";
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = require('../app');
describe('Players', function () {
    describe('/Get of Players ', function () {
        it('Should be able to get the players', function (done) {
            chai.request(app)
                .get('/players')
                .end(function (err, res) {
                chai.expect(res).to.have.status(200);
                chai.expect(res).to.be.json;
                assert.equal(res.body.length > 0, false);
                done();
            });
        });
    });
});
//# sourceMappingURL=Players.js.map
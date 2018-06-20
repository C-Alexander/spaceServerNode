///<reference path="../node_modules/@types/mocha/index.d.ts"/>
const assert = require('assert');
const chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app');

describe('Players', function () {
    describe('/Get of Players ', function () {
        it('Should be able to get the players', function (done) {
            chai.request(app)
                .get('/players')
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body.length > 0, false);

                    done()

                });
        });
    });
});
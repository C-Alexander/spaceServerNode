///<reference path="../node_modules/@types/mocha/index.d.ts"/>
const assert = require('assert');
const chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app');

describe('Maps', function () {
    describe('TEST /Patch, /Get of Maps ', function () {
        it('Should be able to get the maps', function (done) {
            chai.request(app)
                .get('/maps')
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body.length > 0, true);

                    done()

                });
        });
        let id;
        it('Should be able to get Sol (and only Sol)', function (done) {
            chai.request(app)
                .get('/maps')
                .query("name=Sol")
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    id = res.body[0].id;
                    assert.equal(res.body.length > 0, true);

                    res.body.forEach(e => {
                        if (e['name'] != 'Sol') assert.fail('Name parameter not functioning');
                    });
                    done();
                });
        });
        it('Should be able to get Sol by ID', function (done) {
            chai.request(app)
                .get('/maps/' + id)
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.notEqual(res.body, null);

                    done();
                })
        });
        it('Should be able to successfully PATCH the name', (done) => {

            chai.request(app)
                .patch('/maps/' + id)
                .send({name: "Magrathea"})
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body.name, "Magrathea");
                    id = res.body.id;
                    done();

                })
        });

        it('Should find the new name now', (done) => {
            chai.request(app)
                .get('/maps/' + id)
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body.name, "Magrathea");
                    done();
                });
        });
        it('Should get nothing for "Ceti Alpha"', function (done) {
            chai.request(app)
                .get('/maps')
                .query("name=Ceti Alpha")
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body.length > 0, false);

                    res.body.forEach(e => {
                        if (e['name'] != 'Magrathrea') assert.fail('Name parameter not functioning');
                    });
                    done()

                });
        });
        it('Should get nothing if sending an invalid id', function (done) {
            chai.request(app)
                .get('/maps/lolbreak')
                .end((err, res) => {
                    chai.expect(res).to.have.status(200);
                    chai.expect(res).to.be.json;
                    assert.equal(res.body, null);

                    done()

                });
        });
    });
});
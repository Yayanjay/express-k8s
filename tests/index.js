const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index')

chai.use(chaiHttp);
chai.should();

describe("UNTUK MENGETES USER", () => {
    describe("GET /api/v1/users", () => {
        // Test to get all users record
        it("Mendapat Semua Data User", (done) => {
            chai.request(app)
                .get('/api/v1/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single user record
        it("Mendapatkan Data User By ID", (done) => {
            const id = 1;
            chai.request(app)
                .get(`/api/v1/users/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test failed to get single user record
        it("Tidak Mendapatkan Data User By ID", (done) => {
            const id = 5;
            chai.request(app)
                .get(`/api/v1/users/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
    describe("POST /api/v1//users", () => {
        it('Menambahkan User Baru', (done) => {
            chai.request(app)
                .post('/api/v1/users')
                .send({
                    firstname: 'John Doe',
                    alamat: 'Jl. Jeruk No.14'
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                });
        });
    })
});

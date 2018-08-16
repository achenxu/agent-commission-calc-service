import app from "../src/server";

import { expect } from "chai";
import request from "supertest";

describe('Success #POST /commissions', function () {
    it('should return a valid comission', function (done) {
        const body = {
            plan: "planA",
            amount: 100000,
        }
        request(app)
            .post('/commissions')
            .send(body)
            .end(function (err: any, res: any) {
                expect(res.statusCode).to.equal(200);
                expect(res.body[0]).to.have.property("agentName");
                expect(res.body[0]).to.have.property("commissionAmount");
                expect(res.body).to.have.length(4);
                done();
            });
    });
});

describe('Error #POST /commissions', function () {
    it('should return error if plan is not passed', function (done) {
        const body = {
            amount: 100000,
        }
        request(app)
            .post('/commissions')
            .send(body)
            .end(function (err: any, res: any) {
                expect(res.statusCode).to.equal(400);
                expect(res.body.error).to.equal("Bad Request");
                done();
            });
    });

    it('should return error if amount is not passed', function (done) {
        const body = {
            plan: "planA",
        }
        request(app)
            .post('/commissions')
            .send(body)
            .end(function (err: any, res: any) {
                expect(res.statusCode).to.equal(400);
                expect(res.body.error).to.equal("Bad Request");
                done();
            });
    });

    it('should return error if plan is not valid', function (done) {
        const body = {
            plan: "invalidPlan",
            amount: 100000
        }
        request(app)
            .post('/commissions')
            .send(body)
            .end(function (err: any, res: any) {
                expect(res.statusCode).to.equal(400);
                expect(res.body.error).to.equal("Bad Request");
                done();
            });
    });
});
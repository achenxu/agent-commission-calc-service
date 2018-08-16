"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boom_1 = __importDefault(require("boom"));
var calculateComission_1 = require("../procedures/calculateComission");
var express_1 = require("express");
var router = express_1.Router();
router.post("/", function (req, res, next) {
    var plan = req.body.plan;
    var amount = req.body.amount;
    if (!plan || !amount) {
        return next(boom_1.default.badRequest("Consumer must pass required params 'plan' and 'amount'"));
    }
    else if (!calculateComission_1.planIsValid(plan)) {
        return next(boom_1.default.badRequest("Plan " + plan + " is not a valid plan"));
    }
    var response = calculateComission_1.calculateCommission(plan, amount);
    res.json(response);
});
exports.CommissionsController = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var commissionPlans_1 = require("../data/commissionPlans");
var agentCommissionRates_1 = require("../data/agentCommissionRates");
function calculateCommission(plan, amount) {
    var result = [];
    for (var i in commissionPlans_1.commissionPlans[plan]) {
        var commissionAmount = calculateAgentCommission(i, amount, plan);
        var commission = { agentName: i, commissionAmount: commissionAmount };
        result.push(commission);
    }
    return result;
}
exports.calculateCommission = calculateCommission;
function calculateAgentCommission(agent, amount, plan) {
    var num = (agentCommissionRates_1.agentCommissionRates[agent] * amount * commissionPlans_1.commissionPlans[plan][agent]);
    var bigNum = new bignumber_js_1.default(num);
    return bigNum.decimalPlaces(2).toNumber();
}
function planIsValid(plan) {
    return !!commissionPlans_1.commissionPlans[plan];
}
exports.planIsValid = planIsValid;

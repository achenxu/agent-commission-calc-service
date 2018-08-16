import BigNumber from "bignumber.js";

import {commissionPlans} from "../data/commissionPlans";
import {agentCommissionRates} from "../data/agentCommissionRates";

interface CommissionResponse {
    agentName: string;
    commissionAmount: number;
}

type CommissionsResponse = Array<CommissionResponse>

export function calculateCommission (plan: string, amount: number): CommissionsResponse {
    const result = [];

    for (let i in commissionPlans[plan]) {
        const commissionAmount = calculateAgentCommission(i, amount, plan);
        const commission = { agentName: i, commissionAmount };
        result.push(commission);
    }
    return result;
}

function calculateAgentCommission(agent: string, amount: number, plan: string): number {
    const num = (agentCommissionRates[agent] * amount * commissionPlans[plan][agent]);
    const bigNum = new BigNumber(num);
    return bigNum.decimalPlaces(2).toNumber();
}

export function planIsValid(plan: string): boolean {
    return !!commissionPlans[plan];
}
interface CommissionPlans {
    [index: string]: Plan;
}

interface Plan {
    [index: string]: number;
}

export const commissionPlans: CommissionPlans = {
    planA: {
        sellingAgent: 0.50,
        superAgent1: 0.05,
        superAgent2: 0,
        superAgent3: 0,
    },
    planB: {
        sellingAgent: 0.70,
        superAgent1: 0.08,
        superAgent2: 0.04,
        superAgent3: 0,
    }
};
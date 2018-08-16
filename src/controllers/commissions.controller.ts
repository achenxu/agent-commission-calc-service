import boom from "boom";

import { calculateCommission, planIsValid } from "../procedures/calculateComission";
import { Request, Response, Router, NextFunction } from "express";

const router: Router = Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const plan = req.body.plan;
    const amount = req.body.amount;

    if (!plan || !amount) {
        return next(boom.badRequest("Consumer must pass required params 'plan' and 'amount'"));
    } else if (!planIsValid(plan)) {
        return next(boom.badRequest(`Plan ${plan} is not a valid plan`));   
    }

    const response = calculateCommission(plan, amount);
    res.json(response);
});

export const CommissionsController: Router = router;

import { expect } from 'chai';
import 'mocha';

import { calculateCommission } from '../src/procedures/calculateComission';

describe('calculateCommission', () => {
    it('should return the correct commissions for planA', () => {
        const expectedResult = [ 
            { agentName: 'sellingAgent', commissionAmount: 1000 },
            { agentName: 'superAgent1', commissionAmount: 125 },
            { agentName: 'superAgent2', commissionAmount: 0 },
            { agentName: 'superAgent3', commissionAmount: 0 } 
        ];
        expect(calculateCommission("planA", 100000)).to.eql(expectedResult);
    });

    it('should return the correct commissions for planB', () => {
        const expectedResult = [ 
            { agentName: 'sellingAgent', commissionAmount: 1400 },
            { agentName: 'superAgent1', commissionAmount: 200 },
            { agentName: 'superAgent2', commissionAmount: 130 },
            { agentName: 'superAgent3', commissionAmount: 0 } 
        ];
        expect(calculateCommission("planB", 100000)).to.eql(expectedResult);
    });

    it('should return the correct amount of decimals for a amount with none whole amount', () => {
        const expectedResult = [ 
            { agentName: 'sellingAgent', commissionAmount: 1572.84 },
            { agentName: 'superAgent1', commissionAmount: 224.69 },
            { agentName: 'superAgent2', commissionAmount: 146.05 },
            { agentName: 'superAgent3', commissionAmount: 0 } 
        ];
        expect(calculateCommission("planB", 112345.45)).to.eql(expectedResult);
    });
});
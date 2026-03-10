import {Injectable} from "@angular/core";
import {InvestmentInputModel} from "../investment-inputs/investment-input.model";
import {InvestmentOutputModelArray} from "./investment-output.model";

@Injectable({providedIn: 'root'})
export class InvestmentCalculatorService {

    resultData ?: InvestmentOutputModelArray

    calculateInvestmentResults(investmentInput: InvestmentInputModel): void {
        const investmentResults: InvestmentOutputModelArray = [];

        let investmentValue = investmentInput.initialInvestment;

        for (let i = 0; i < investmentInput.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (investmentInput.expectedReturn / 100.0);
            investmentValue += interestEarnedInYear + investmentInput.annualInvestment;
            const investedCapital = investmentInput.initialInvestment + investmentInput.annualInvestment * year;
            const totalInterest = investmentValue - investedCapital;

            investmentResults.push({
                year: year,
                investmentValue: investmentValue,
                interestYear: interestEarnedInYear,
                totalInterest: totalInterest,
                investedCapital: investedCapital
            });
        }

        this.resultData = investmentResults;
    }
}

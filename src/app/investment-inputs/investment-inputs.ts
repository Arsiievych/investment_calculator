import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentCalculatorService} from "../investment-results/investment-calculator.service";

@Component({
    selector: 'app-investment-inputs',
    imports: [FormsModule],
    templateUrl: './investment-inputs.html',
    styleUrl: './investment-inputs.css',
})
export class InvestmentInputs {
    initialInvestment: number | null = null;
    annualInvestment: number | null = null;
    expectedReturn: number | null = null;
    duration: number | null = null;

    constructor(private readonly investmentCalculatorService: InvestmentCalculatorService) {
    }

    onSubmit() {
        if (
            this.initialInvestment === null ||
            this.annualInvestment === null ||
            this.expectedReturn === null ||
            this.duration === null
        ) {
            return;
        }

        this.investmentCalculatorService.calculateInvestmentResults({
            initialInvestment: this.initialInvestment,
            annualInvestment: this.annualInvestment,
            expectedReturn: this.expectedReturn,
            duration: this.duration,
        })
    }
}

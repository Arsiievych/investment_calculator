import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-investment-inputs',
    imports: [FormsModule],
    templateUrl: './investment-inputs.html',
    styleUrl: './investment-inputs.css',
})
export class InvestmentInputs {
    initialInvestment = 0;
    annualInvestment = 0;
    expectedReturn = 0;
    duration = 0;

    onSubmit() {
        console.log(this.initialInvestment, this.annualInvestment, this.expectedReturn, this.duration);
    }
}

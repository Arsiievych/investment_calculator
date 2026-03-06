import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "./investment-input.model";

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

    @Output() inputChanged = new EventEmitter<InvestmentInputModel>();

    onSubmit() {
        this.inputChanged.emit({
            initialInvestment: this.initialInvestment,
            annualInvestment: this.annualInvestment,
            expectedReturn: this.expectedReturn,
            duration: this.duration
        });
    }
}
